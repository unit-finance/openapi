# Credit-account helpers, the Ruby analogue of Node's `helpers/creditAccounts.ts`
# and Python's `helpers/credit_accounts.py`.

require 'json'
require 'unit_openapi_ruby_sdk'
require_relative 'api'
require_relative 'capabilities'
require_relative 'fixtures'
require_relative 'shared_account'

module Helpers
  module CreditAccounts
    # `creditTerms` names a credit product configured on the org, and there is
    # no API to enumerate them. `credit_terms_1` is the identifier Unit's own
    # docs use for the sandbox default; an org without it answers the create
    # with 4xx, which the caller treats as feature-unavailable.
    SANDBOX_CREDIT_TERMS = 'credit_terms_1'.freeze

    @resolved = false
    @id = nil

    module_function

    # Read the account list raw: it is a `oneOf` over every account variant and
    # a single sandbox-only spelling anywhere in the page would sink the typed
    # round-trip for a lookup that only needs `type` and `id`.
    def find_existing_id
      api = Helpers::Api.build_accounts_api
      body, = api.list_accounts_with_http_info(page_limit: '100', debug_return_type: 'String')
      document = JSON.parse(body)
      Array(document['data']).each do |account|
        next unless account.is_a?(Hash)

        return account['id'] if account['type'] == 'creditAccount' && account['id'].is_a?(String)
      end
      nil
    end

    # A credit account id for the repayment suites, or nil when the sandbox org
    # has no credit product. Prefers an existing credit account over minting one
    # so repeated runs don't accumulate them; falls back to a create.
    def id_or_skip
      return @id if @resolved

      @resolved = true
      @id = find_existing_id
      return @id if @id

      shared = Helpers::SharedAccount.get_or_create
      begin
        api = Helpers::Api.build_accounts_api
        body, = api.create_account_with_http_info(
          Helpers::Fixtures.create_credit_account_request(
            shared[:customer_id], SANDBOX_CREDIT_TERMS
          ),
          debug_return_type: 'String'
        )
        created = JSON.parse(body)['data']
        @id = created.is_a?(Hash) ? created['id'] : nil
      rescue UnitFinanceSdk::ApiError => e
        raise unless Helpers::Capabilities.capability_error?(e)

        warn 'No credit product is configured on this sandbox org, so credit ' \
             "accounts cannot be created; skipping. #{Helpers::Capabilities.error_body(e)}"
        @id = nil
      end
      @id
    end
  end
end
