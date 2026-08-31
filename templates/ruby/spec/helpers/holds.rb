# Account-hold helpers, the Ruby analogue of Node's `helpers/holds.ts` and
# Python's `helpers/holds.py`.

require 'unit_finance_sdk'
require_relative 'api'
require_relative 'fixtures'

module Helpers
  module Holds
    module_function

    # Create an account hold, or return `nil` when the sandbox org's bank
    # agreement has `enableHoldOnAccounts` turned off. That flag is a property
    # of the org the token belongs to and cannot be toggled from the API, so
    # every hold-creating example has to treat it as feature-unavailable rather
    # than fail.
    def create_or_skip(api, account_id)
      api.create_account_hold_with_http_info(
        Helpers::Fixtures.create_account_hold_request(account_id)
      )
    rescue UnitFinanceSdk::ApiError => e
      raise unless e.code == 400 && e.response_body.to_s.include?('enableHoldOnAccounts')

      nil
    end
  end
end
