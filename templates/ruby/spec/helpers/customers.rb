# Shared customer helpers for the Customers specs.
#
# The shared business application auto-approves in the sandbox, provisioning a
# business customer that the customer specs reuse; its id is exposed via
# `SharedAccount`.

require_relative 'api'
require_relative 'shared_account'

module Helpers
  module Customers
    module_function

    def shared_business_customer_id
      Helpers::SharedAccount.get_or_create[:customer_id]
    end

    # Returns `[customer_id, officer_id]` for the shared business customer.
    def shared_business_customer_officer_id
      customer_id = shared_business_customer_id
      api = Helpers::Api.build_customers_api
      data, = api.get_customer_with_http_info(customer_id)
      customer = Helpers::Api.unwrap(data.data)
      officer_id = customer.relationships&.officer&.data&.id
      raise "No officer relationship on business customer #{customer_id}." unless officer_id

      [customer_id, officer_id]
    end
  end
end
