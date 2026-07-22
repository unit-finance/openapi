# Shared deposit account, the Ruby analogue of Node's `sharedAccount.ts` and
# Python's `shared_account.py`.

require_relative 'api'
require_relative 'fixtures'

module Helpers
  module SharedAccount
    @cached = nil
    @cached_individual_customer_id = nil

    module_function

    def customer_id_from_application(app)
      customer = app.relationships&.customer
      customer_id = customer&.data&.id
      raise 'Application is missing a customer relationship.' unless customer_id

      customer_id
    end

    def create_deposit_account
      apps_api = Helpers::Api.build_applications_api
      accounts_api = Helpers::Api.build_accounts_api

      created, created_status, = apps_api.create_application_with_http_info(
        Helpers::Fixtures.business_application_request
      )
      raise "Expected 201 creating business application, got #{created_status}" unless created_status == 201

      app_id = Helpers::Api.unwrap(created.data).id
      app = Helpers::Api.unwrap(apps_api.get_by_id(app_id).data)
      customer_id = customer_id_from_application(app)

      account_res, account_status, = accounts_api.create_account_with_http_info(
        Helpers::Fixtures.create_deposit_account_request(customer_id)
      )
      raise "Expected 201 creating deposit account, got #{account_status}" unless account_status == 201

      account = Helpers::Api.unwrap(account_res.data)
      {
        id: account.id,
        type: account.type,
        customer_id: customer_id,
        routing_number: account.attributes.routing_number,
        account_number: account.attributes.account_number
      }
    end

    def get_or_create
      return @cached if @cached

      @cached = create_deposit_account
    end

    def create_dedicated
      create_deposit_account
    end

    def individual_customer_id
      return @cached_individual_customer_id if @cached_individual_customer_id

      apps_api = Helpers::Api.build_applications_api
      created, created_status, = apps_api.create_application_with_http_info(
        Helpers::Fixtures.individual_application_request
      )
      raise "Expected 201 creating individual application, got #{created_status}" unless created_status == 201

      app_id = Helpers::Api.unwrap(created.data).id
      app = Helpers::Api.unwrap(apps_api.get_by_id(app_id).data)
      @cached_individual_customer_id = customer_id_from_application(app)
    end
  end
end
