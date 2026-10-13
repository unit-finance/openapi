# Repayment helpers, the Ruby analogue of Node's `helpers/repayments.ts` and
# Python's `helpers/repayments.py`.

require 'unit_openapi_ruby_sdk'
require_relative 'api'
require_relative 'capabilities'
require_relative 'credit_accounts'
require_relative 'fixtures'
require_relative 'shared_account'

module Helpers
  module Repayments
    # The JSON:API `type` values the repayment variants deserialize to.
    TYPES = %w[
      achRepayment
      bookRepayment
      capitalPartnerAchRepayment
      capitalPartnerBookRepayment
      externalRepayment
    ].freeze

    # The JSON:API `type` values the recurring repayment variants deserialize to.
    RECURRING_TYPES = %w[
      recurringAchRepayment
      recurringBookRepayment
      recurringCapitalPartnerAchRepayment
      recurringCapitalPartnerBookRepayment
    ].freeze

    module_function

    # Create a book repayment, or nil when repayments are unreachable on this
    # org. Every repayment needs a `creditAccount`, which needs a credit product
    # on the org's bank agreement; see `credit_accounts.rb`. Repaying also
    # requires a drawn balance on the credit account, which the sandbox will not
    # always have, so a rejected repayment is treated as unavailable too.
    def create_book_or_skip
      credit_account_id = Helpers::CreditAccounts.id_or_skip
      return nil if credit_account_id.nil?

      shared = Helpers::SharedAccount.get_or_create
      api = Helpers::Api.build_repayments_api
      data, status_code, = api.create_repayment_with_http_info(
        Helpers::Fixtures.create_book_repayment_request(
          shared[:account_id], credit_account_id, shared[:counterparty_account_id]
        )
      )
      raise "Failed to create repayment: expected status 201, got #{status_code}." unless status_code == 201

      Helpers::Api.unwrap(data.data)
    rescue UnitFinanceSdk::ApiError => e
      raise unless Helpers::Capabilities.capability_error?(e)

      warn "Repayments are not available on this sandbox org; skipping. #{Helpers::Capabilities.error_body(e)}"
      nil
    end

    # An external repayment id for `return_external_repayment` to reverse.
    # `return` is only valid for the external variant, so the id cannot come
    # from the book repayment above.
    def create_external_or_skip
      credit_account_id = Helpers::CreditAccounts.id_or_skip
      return nil if credit_account_id.nil?

      api = Helpers::Api.build_repayments_api
      data, status_code, = api.create_repayment_with_http_info(
        Helpers::Fixtures.create_external_repayment_request(credit_account_id)
      )
      raise "Failed to create external repayment: expected status 201, got #{status_code}." unless status_code == 201

      Helpers::Api.unwrap(data.data).id
    rescue UnitFinanceSdk::ApiError => e
      raise unless Helpers::Capabilities.capability_error?(e)

      warn 'External repayments are not available on this sandbox org; ' \
           "skipping. #{Helpers::Capabilities.error_body(e)}"
      nil
    end

    # A repayment id for the read suite. Prefers one this run created; falls
    # back to an existing repayment so the read is still covered on an org that
    # cannot create one.
    def id_or_skip
      created = create_book_or_skip
      return created.id if created

      api = Helpers::Api.build_repayments_api
      data, = api.list_repayments_with_http_info(page_limit: '1')
      first = Array(data.data).compact.first
      if first.nil?
        warn 'This sandbox org has no repayments and cannot create one ' \
             '(no credit product is configured); skipping.'
        return nil
      end
      Helpers::Api.unwrap(first).id
    end

    # Create a recurring book repayment, or nil when unreachable. Each caller
    # mints its own: `enable` / `disable` flip the schedule's status, so a
    # shared one would make the run order-dependent.
    def create_recurring_or_skip
      credit_account_id = Helpers::CreditAccounts.id_or_skip
      return nil if credit_account_id.nil?

      shared = Helpers::SharedAccount.get_or_create
      api = Helpers::Api.build_recurring_repayments_api
      data, status_code, = api.create_recurring_repayment_with_http_info(
        Helpers::Fixtures.create_recurring_book_repayment_request(
          shared[:account_id], credit_account_id, shared[:counterparty_account_id]
        )
      )
      raise "Failed to create recurring repayment: expected status 201, got #{status_code}." unless status_code == 201

      Helpers::Api.unwrap(data.data)
    rescue UnitFinanceSdk::ApiError => e
      raise unless Helpers::Capabilities.capability_error?(e)

      warn 'Recurring repayments are not available on this sandbox org; ' \
           "skipping. #{Helpers::Capabilities.error_body(e)}"
      nil
    end

    # A recurring repayment id for the read suite, created or pre-existing.
    def recurring_id_or_skip
      created = create_recurring_or_skip
      return created.id if created

      api = Helpers::Api.build_recurring_repayments_api
      data, = api.list_recurring_repayments_with_http_info(page_limit: '1')
      first = Array(data.data).compact.first
      if first.nil?
        warn 'This sandbox org has no recurring repayments and cannot create ' \
             'one (no credit product is configured); skipping.'
        return nil
      end
      Helpers::Api.unwrap(first).id
    end
  end
end
