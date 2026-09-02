# Individual-customer helpers, the Ruby analogue of Node's
# `helpers/individualCustomer.ts`.
#
# Owner-mutation tests require individual customers: Unit forbids mixing a
# business owner with individual owners on the same account, and the shared
# suite account is business-owned. These helpers provision fresh individual
# customers and individual-owned deposit accounts to test against.

require_relative 'api'
require_relative 'fixtures'

module Helpers
  module IndividualCustomer
    module_function

    # Creates an individual application in the sandbox and returns the id of the
    # customer it provisions.
    def create_individual_customer_id
      api = Helpers::Api.build_api
      data, status_code, = api.create_application_with_http_info(
        Helpers::Fixtures.individual_application_request
      )
      raise "Failed to create individual application: expected status 201, got #{status_code}." unless status_code == 201

      application_id = Helpers::Api.unwrap(data.data).id
      30.times do
        app_data, = api.get_by_id_with_http_info(application_id)
        customer_id = Helpers::Api.unwrap(app_data.data).relationships&.customer&.data&.id
        return customer_id if customer_id

        Helpers::Api.sleep(1)
      end
      raise "Timed out waiting for customer on application #{application_id}."
    end

    # Provisions a fresh individual customer plus a deposit account owned solely
    # by that customer, so owner-mutation tests start from an all-individual
    # account.
    def create_individual_deposit_account
      customer_id = create_individual_customer_id
      api = Helpers::Api.build_accounts_api
      data, status_code, = api.create_account_with_http_info(
        Helpers::Fixtures.create_deposit_account_request(customer_id)
      )
      raise "Failed to create individual deposit account: expected status 201, got #{status_code}." unless status_code == 201

      Helpers::Api.unwrap(data.data)
    end
  end
end
