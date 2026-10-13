# Sandbox client helpers, the Ruby analogue of Node's `helpers/api.ts` and
# Python's `helpers/api.py`.

require 'json'
require 'net/http'
require 'securerandom'
require 'uri'
require 'unit_openapi_ruby_sdk'

module Helpers
  module Api
    TOKEN = ENV['UNIT_SANDBOX_TOKEN']
    BASE_URL = ENV['UNIT_SANDBOX_BASE_URL'] || 'https://api.s.unit.sh'

    # Stable id for this run; stamped into created applications' tags so the
    # artifacts can be filtered out of the sandbox later.
    TEST_RUN_ID = "sdk-ruby-#{Time.now.to_i.to_s(16)}-#{SecureRandom.hex(3)}".freeze

    # `GET /credit-applications/{id}` and `GET /credit-decisions/{id}` reject any
    # request that omits a `Content-Type: application/vnd.api+json` header with
    # 415, even though neither takes a body. The spec declares no request body
    # for them, so the generated clients send no `Content-Type` and every
    # single-resource read fails. Specs pass this via `header_params`.
    VND_API_JSON_HEADERS = { 'Content-Type' => 'application/vnd.api+json' }.freeze

    module_function

    def configuration
      if TOKEN.nil? || TOKEN.empty?
        raise 'UNIT_SANDBOX_TOKEN is required to talk to the sandbox; set it in .env or the shell.'
      end

      config = UnitFinanceSdk::Configuration.new
      config.access_token = TOKEN
      # `host=` strips the scheme and any path, so passing the full base URL is
      # safe; the scheme stays the configuration default (https).
      config.host = BASE_URL
      config
    end

    # Construct an `ApplicationsApi` bound to the sandbox. Raises if the bearer
    # token is missing -- but every sandbox example gates on the `:sandbox`
    # metadata skip (see spec_helper.rb), so this branch is never reached when
    # it is unset.
    def build_api
      UnitFinanceSdk::ApplicationsApi.new(UnitFinanceSdk::ApiClient.new(configuration))
    end

    def build_accounts_api
      UnitFinanceSdk::AccountsApi.new(UnitFinanceSdk::ApiClient.new(configuration))
    end

    def build_fees_api
      UnitFinanceSdk::FeesApi.new(UnitFinanceSdk::ApiClient.new(configuration))
    end

    def build_payments_api
      UnitFinanceSdk::PaymentsApi.new(UnitFinanceSdk::ApiClient.new(configuration))
    end

    def build_cards_api
      UnitFinanceSdk::CardsApi.new(UnitFinanceSdk::ApiClient.new(configuration))
    end

    def build_transactions_api
      UnitFinanceSdk::TransactionsApi.new(UnitFinanceSdk::ApiClient.new(configuration))
    end

    def build_customers_api
      UnitFinanceSdk::CustomersApi.new(UnitFinanceSdk::ApiClient.new(configuration))
    end

    def build_check_deposits_api
      UnitFinanceSdk::CheckDepositsApi.new(UnitFinanceSdk::ApiClient.new(configuration))
    end

    def build_check_payments_api
      UnitFinanceSdk::CheckPaymentsApi.new(UnitFinanceSdk::ApiClient.new(configuration))
    end

    def build_counterparties_api
      UnitFinanceSdk::CounterpartiesApi.new(UnitFinanceSdk::ApiClient.new(configuration))
    end

    def build_application_documents_api
      UnitFinanceSdk::ApplicationDocumentsApi.new(UnitFinanceSdk::ApiClient.new(configuration))
    end

    def build_authorized_users_api
      UnitFinanceSdk::AuthorizedUsersApi.new(UnitFinanceSdk::ApiClient.new(configuration))
    end

    def build_card_fraud_outreach_api
      UnitFinanceSdk::CardFraudOutreachApi.new(UnitFinanceSdk::ApiClient.new(configuration))
    end

    def build_card_holder_api_tokens_api
      UnitFinanceSdk::CardHolderAPITokensApi.new(UnitFinanceSdk::ApiClient.new(configuration))
    end

    def build_cards_atm_locations_api
      UnitFinanceSdk::CardsATMLocationsApi.new(UnitFinanceSdk::ApiClient.new(configuration))
    end

    def build_cards_add_to_mobile_wallet_api
      UnitFinanceSdk::CardsAddToMobileWalletApi.new(UnitFinanceSdk::ApiClient.new(configuration))
    end

    def build_cards_authorization_requests_api
      UnitFinanceSdk::CardsAuthorizationRequestsApi.new(UnitFinanceSdk::ApiClient.new(configuration))
    end

    def build_cards_authorizations_api
      UnitFinanceSdk::CardsAuthorizationsApi.new(UnitFinanceSdk::ApiClient.new(configuration))
    end

    def build_credit_applications_api
      UnitFinanceSdk::CreditApplicationsApi.new(UnitFinanceSdk::ApiClient.new(configuration))
    end

    def build_credit_decisions_api
      UnitFinanceSdk::CreditDecisionsApi.new(UnitFinanceSdk::ApiClient.new(configuration))
    end

    def build_daca_api
      UnitFinanceSdk::DACAApi.new(UnitFinanceSdk::ApiClient.new(configuration))
    end

    def build_disputes_api
      UnitFinanceSdk::DisputesApi.new(UnitFinanceSdk::ApiClient.new(configuration))
    end

    def build_institutions_api
      UnitFinanceSdk::InstitutionsApi.new(UnitFinanceSdk::ApiClient.new(configuration))
    end

    def build_interest_api
      UnitFinanceSdk::InterestApi.new(UnitFinanceSdk::ApiClient.new(configuration))
    end

    def build_lending_programs_api
      UnitFinanceSdk::LendingProgramsApi.new(UnitFinanceSdk::ApiClient.new(configuration))
    end

    def build_positive_pay_api
      UnitFinanceSdk::PositivePayApi.new(UnitFinanceSdk::ApiClient.new(configuration))
    end

    def build_receivables_management_api
      UnitFinanceSdk::ReceivablesManagementApi.new(UnitFinanceSdk::ApiClient.new(configuration))
    end

    def build_recurring_repayments_api
      UnitFinanceSdk::RecurringRepaymentsApi.new(UnitFinanceSdk::ApiClient.new(configuration))
    end

    def build_repayments_api
      UnitFinanceSdk::RepaymentsApi.new(UnitFinanceSdk::ApiClient.new(configuration))
    end

    def build_rewards_api
      UnitFinanceSdk::RewardsApi.new(UnitFinanceSdk::ApiClient.new(configuration))
    end

    def build_statements_api
      UnitFinanceSdk::StatementsApi.new(UnitFinanceSdk::ApiClient.new(configuration))
    end

    def build_stop_payments_api
      UnitFinanceSdk::StopPaymentsApi.new(UnitFinanceSdk::ApiClient.new(configuration))
    end

    def build_tax_forms_api
      UnitFinanceSdk::TaxFormsApi.new(UnitFinanceSdk::ApiClient.new(configuration))
    end

    def sleep(seconds)
      Kernel.sleep(seconds)
    end

    # A raw `GET` against the sandbox, returning `[parsed_body, status_code]`.
    #
    # Some responses cannot survive a typed round-trip because the spec is
    # stricter than what the sandbox sends, and the generated `oneOf` builder
    # returns nil when no arm matches ("data cannot be nil").
    # `GET /accrued-interest/total` and the receivables reads are the current
    # cases (see SLICES.md). Node (axios) does not validate and is unaffected;
    # this escape hatch keeps the Ruby suite asserting the same structure
    # instead of skipping outright.
    def raw_get(path, query = {})
      uri = URI.parse("#{BASE_URL}#{path}")
      uri.query = URI.encode_www_form(query) unless query.empty?
      request = Net::HTTP::Get.new(uri)
      request['Authorization'] = "Bearer #{TOKEN}"
      response = Net::HTTP.start(
        uri.hostname, uri.port, use_ssl: uri.scheme == 'https', read_timeout: 60
      ) { |http| http.request(request) }
      [JSON.parse(response.body), response.code.to_i]
    end

    # Polymorphic JSON:API `data`/`included` members deserialize into the
    # concrete variant directly: the generated `oneOf` module's `build` returns
    # the matched model instance, with no wrapper object. So unwrap is identity;
    # it is kept for parity with the Node/Python helpers and to document intent.
    def unwrap(obj)
      obj
    end
  end
end
