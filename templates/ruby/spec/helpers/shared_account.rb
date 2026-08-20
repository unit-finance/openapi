# Shared deposit accounts, the Ruby analogue of Node's `sharedAccount.ts`.
#
# Lazily provisions a customer plus two deposit accounts that downstream
# fees/accounts/payments suites reuse.

require_relative 'api'
require_relative 'fixtures'
require_relative 'shared_app'

module Helpers
  module SharedAccount
    @cached = nil

    module_function

    def wait_for_customer_id(application_id)
      api = Helpers::Api.build_api
      30.times do
        data, status_code, = api.get_by_id_with_http_info(application_id)
        raise "Expected 200 fetching application #{application_id}, got #{status_code}" unless status_code == 200

        app = Helpers::Api.unwrap(data.data)
        customer_id = app.relationships&.customer&.data&.id
        return customer_id if customer_id

        Helpers::Api.sleep(1)
      end
      raise "Timed out waiting for customer on application #{application_id}."
    end

    def create_deposit_account(customer_id)
      api = Helpers::Api.build_accounts_api
      data, status_code, = api.create_account_with_http_info(
        Helpers::Fixtures.deposit_account_request_for_customer(customer_id)
      )
      raise "Failed to create deposit account: expected status 201, got #{status_code}." unless status_code == 201

      Helpers::Api.unwrap(data.data)
    end

    def get_or_create
      return @cached if @cached

      shared_app = Helpers::SharedApp.get_or_create
      customer_id = wait_for_customer_id(shared_app[:id])
      primary = create_deposit_account(customer_id)
      counterparty = create_deposit_account(customer_id)

      @cached = {
        account_id: primary.id,
        counterparty_account_id: counterparty.id,
        customer_id: customer_id,
        routing_number: primary.attributes.routing_number,
        account_number: primary.attributes.account_number
      }
    end

    # Creates an isolated deposit account for tests that mutate account state.
    def create_dedicated_deposit_account
      shared = get_or_create
      api = Helpers::Api.build_accounts_api
      data, status_code, = api.create_account_with_http_info(
        Helpers::Fixtures.create_deposit_account_request(shared[:customer_id])
      )
      raise "Failed to create dedicated deposit account: expected status 201, got #{status_code}." unless status_code == 201

      Helpers::Api.unwrap(data.data)
    end
  end
end
