# Stop-payment helpers, the Ruby analogue of Node's `helpers/stopPayments.ts`
# and Python's `helpers/stop_payments.py`.

require 'json'
require 'unit_finance_sdk'
require_relative 'api'
require_relative 'fixtures'
require_relative 'shared_account'

module Helpers
  module StopPayments
    # The JSON:API `type` values stop payments deserialize to.
    #
    # The spec says the check variant is `checkStopPayment`, but the sandbox
    # answers create, get, disable and list with the bare `stopPayment` for it
    # -- only the ACH variant carries a discriminated `achStopPayment`. Both
    # spellings are accepted here so the suites keep passing when `unit-openapi`
    # reconciles the discriminator.
    TYPES = %w[stopPayment checkStopPayment achStopPayment].freeze

    # What the sandbox actually returns for a check stop payment today.
    CHECK_TYPE = 'stopPayment'.freeze

    module_function

    def random_check_number
      rand(1_000_000..9_999_999).to_s
    end

    # Create a check stop payment and return the raw JSON:API `data` member.
    #
    # The typed call cannot be used: the response `oneOf` is keyed on the
    # spec's `checkStopPayment` discriminator, so the sandbox's `stopPayment`
    # matches no arm, the builder returns nil, and the wrapper's `data=` raises
    # "data cannot be nil". Reading the raw body is the same escape hatch the
    # receivables suite uses.
    def create_check_raw
      shared = Helpers::SharedAccount.get_or_create
      api = Helpers::Api.build_stop_payments_api
      body, status_code, = api.create_stop_payment_with_http_info(
        Helpers::Fixtures.create_check_stop_payment_request(
          shared[:account_id], random_check_number
        ),
        debug_return_type: 'String'
      )
      # Raise rather than `expect(...)`: this runs in a helper, not an example
      # body, so a failed expectation would be attributed to the caller
      # misleadingly.
      raise "Failed to create stop payment: expected status 201, got #{status_code}." unless status_code == 201

      JSON.parse(body)['data']
    end

    # Each caller mints its own stop payment rather than sharing one: `disable`
    # moves a stop payment to `Disabled`, so a shared one would make the run
    # order-dependent.
    def create_check_id
      create_check_raw['id']
    end

    # `update_ach_stop_payment` only accepts the ACH variant, hence a separate
    # helper. The ACH variant's `type` matches the spec, so this one can go
    # through the typed client.
    def create_ach_id
      shared = Helpers::SharedAccount.get_or_create
      api = Helpers::Api.build_stop_payments_api
      data, status_code, = api.create_stop_payment_with_http_info(
        Helpers::Fixtures.create_ach_stop_payment_request(shared[:account_id])
      )
      raise "Failed to create ACH stop payment: expected status 201, got #{status_code}." unless status_code == 201

      Helpers::Api.unwrap(data.data).id
    end
  end
end
