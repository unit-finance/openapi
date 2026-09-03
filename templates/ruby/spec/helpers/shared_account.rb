# Shared funded deposit account, the Ruby analogue of Node's `sharedAccount.ts`.
#
# Lazily provisions a funded deposit account (plus a secondary account and an
# individual customer) that fees/accounts/payments specs reuse.

require_relative 'api'
require_relative 'fixtures'
require_relative 'shared_app'

module Helpers
  module SharedAccount
    @cached = nil

    module_function

    def get_or_create
      return @cached if @cached

      shared_app = Helpers::SharedApp.get_or_create
      customer_id = customer_id_from_application(shared_app[:id])

      accounts_api = Helpers::Api.build_accounts_api
      account_id = create_deposit_account(accounts_api, customer_id)
      fund_account(account_id)
      secondary_account_id = create_deposit_account(accounts_api, customer_id)
      ind_customer_id = individual_customer_id

      @cached = {
        customer_id: customer_id,
        account_id: account_id,
        secondary_account_id: secondary_account_id,
        individual_customer_id: ind_customer_id
      }
    end

    def customer_id_from_application(application_id)
      api = Helpers::Api.build_api
      data, status_code, = api.get_by_id_with_http_info(application_id)
      raise "Failed to load application #{application_id}: status #{status_code}" unless status_code == 200

      app = Helpers::Api.unwrap(data.data)
      customer_id = app.relationships&.customer&.data&.id
      if customer_id.nil?
        status = app.respond_to?(:attributes) ? app.attributes&.status : nil
        raise "Application #{application_id} has no customer relationship yet (status=#{status})."
      end

      customer_id
    end

    def create_deposit_account(accounts_api, customer_id)
      data, status_code, = accounts_api.create_account_with_http_info(
        Helpers::Fixtures.create_deposit_account_request(customer_id)
      )
      raise "Failed to create deposit account: status #{status_code}" unless status_code == 201

      Helpers::Api.unwrap(data.data).id
    end

    def fund_account(account_id)
      payments_api = Helpers::Api.build_payments_api
      _data, status_code, = payments_api.create_payment_with_http_info(
        Helpers::Fixtures.ach_credit_payment_request(account_id)
      )
      raise "Failed to fund account #{account_id}: status #{status_code}" unless status_code == 201
    end

    def individual_customer_id
      apps_api = Helpers::Api.build_api
      data, status_code, = apps_api.create_application_with_http_info(
        Helpers::Fixtures.individual_application_request
      )
      raise "Failed to create individual application: status #{status_code}" unless status_code == 201

      customer_id_from_application(Helpers::Api.unwrap(data.data).id)
    end
  end
end
