# Positive Pay helpers, the Ruby analogue of Node's `helpers/positivePay.ts`.

require_relative 'api'
require_relative 'fixtures'
require_relative 'shared_account'

module Helpers
  module PositivePay
    # The JSON:API `type` values the three Positive Pay variants deserialize to.
    TYPES = %w[
      checkPaymentPositivePay
      receivedAchDebitPositivePay
      drawdownPositivePay
    ].freeze

    module_function

    # Create a Positive Pay rule and return its id.
    #
    # Each caller mints its own rule rather than sharing one: `cancel` moves a
    # rule to `Cancelled` and `upload_positive_pay_document` moves a drawdown
    # rule from `AwaitingDocuments` to `Active`, so a shared rule would make
    # the run depend on example order.
    def create_rule(request)
      data, status_code, = Helpers::Api.build_positive_pay_api
                                       .create_positive_pay_with_http_info(request)
      unless status_code == 201
        raise "Failed to create Positive Pay rule: expected status 201, got #{status_code}."
      end

      Helpers::Api.unwrap(data.data).id
    end

    # An `Active` check-payment rule for the get / cancel specs to read.
    def create_check_payment_rule_id
      account_id = Helpers::SharedAccount.get_or_create[:account_id]
      create_rule(Helpers::Fixtures.create_check_payment_positive_pay_request(account_id))
    end

    # A drawdown rule, created `AwaitingDocuments` -- the only state the
    # document upload accepts.
    def create_wire_drawdown_rule_id
      account_id = Helpers::SharedAccount.get_or_create[:account_id]
      create_rule(Helpers::Fixtures.create_wire_drawdown_positive_pay_request(account_id))
    end
  end
end
