# Sandbox client helpers, the Ruby analogue of Node's `helpers/api.ts` and
# Python's `helpers/api.py`.

require 'securerandom'
require 'unit_finance_sdk'

module Helpers
  module Api
    TOKEN = ENV['UNIT_SANDBOX_TOKEN']
    BASE_URL = ENV['UNIT_SANDBOX_BASE_URL'] || 'https://api.s.unit.sh'

    # Stable id for this run; stamped into created applications' tags so the
    # artifacts can be filtered out of the sandbox later.
    TEST_RUN_ID = "sdk-ruby-#{Time.now.to_i.to_s(16)}-#{SecureRandom.hex(3)}".freeze

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

    def sleep(seconds)
      Kernel.sleep(seconds)
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
