# Counterparty helpers, the Ruby analogue of Node's `helpers/counterparties.ts`
# and Python's `helpers/counterparties.py`.

require 'unit_openapi_ruby_sdk'
require_relative 'api'
require_relative 'fixtures'
require_relative 'shared_account'

module Helpers
  module Counterparties
    @cached = nil

    module_function

    # Creates an ACH counterparty owned by the shared business customer.
    def create_dedicated
      shared = Helpers::SharedAccount.get_or_create
      api = Helpers::Api.build_counterparties_api
      data, status_code, = api.create_counterparty_with_http_info(
        Helpers::Fixtures.create_counterparty_request(
          shared[:customer_id],
          shared[:routing_number],
          shared[:account_number]
        )
      )
      raise "Failed to create counterparty: expected status 201, got #{status_code}." unless status_code == 201

      Helpers::Api.unwrap(data.data)
    end

    # Returns a cached counterparty for the read-only examples. `update` and
    # `delete` provision their own so they never mutate or remove a resource
    # another spec depends on.
    def get_or_create
      @cached ||= create_dedicated
    end

    # Read a counterparty balance, or return `nil` when the sandbox does not
    # expose one for this counterparty. Balances are only tracked for
    # counterparties linked through Plaid, so an account/routing-number
    # counterparty answers with a validation error rather than a resource -- a
    # property of the counterparty kind we can create here, not of the request.
    def balance_or_skip(api, counterparty_id)
      api.get_counterparty_balance_with_http_info(counterparty_id)
    rescue UnitFinanceSdk::ApiError => e
      raise unless [400, 404].include?(e.code)

      nil
    end
  end
end
