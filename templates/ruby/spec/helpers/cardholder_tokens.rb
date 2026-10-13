# Cardholder token helpers, the Ruby analogue of Node's
# `helpers/cardholderTokens.ts` and Python's `helpers/cardholder_tokens.py`.

require 'unit_openapi_ruby_sdk'
require_relative 'api'
require_relative 'fixtures'

module Helpers
  module CardholderTokens
    SKIP_STATUSES = [400, 403, 404, 409, 410, 500].freeze

    module_function

    # Start an OTP challenge for a card, or return `nil` when the sandbox
    # rejects it. The challenge is delivered over SMS to the customer's contact
    # phone, and whether an org's cards can receive one is org/bank
    # configuration the API cannot toggle, so every cardholder-token example
    # treats a 4xx/5xx as feature-unavailable rather than a failure.
    def create_verification_or_skip(api, card_id)
      api.create_cardholder_token_verification_with_http_info(
        card_id,
        Helpers::Fixtures.create_cardholder_token_verification_request
      )
    rescue UnitFinanceSdk::ApiError => e
      raise unless SKIP_STATUSES.include?(e.code)

      nil
    end
  end
end
