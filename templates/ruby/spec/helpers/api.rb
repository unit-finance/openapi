# Sandbox client helpers, the Ruby analogue of Node's `helpers/api.ts` and
# Python's `helpers/api.py`.

require 'json'
require 'net/http'
require 'securerandom'
require 'uri'
require 'unit_finance_sdk'

module Helpers
  module Api
    TOKEN = ENV['UNIT_SANDBOX_TOKEN']
    BASE_URL = ENV['UNIT_SANDBOX_BASE_URL'] || 'https://api.s.unit.sh'

    # Stable id for this run; stamped into created applications' tags so the
    # artifacts can be filtered out of the sandbox later.
    TEST_RUN_ID = "sdk-ruby-#{Time.now.to_i.to_s(16)}-#{SecureRandom.hex(3)}".freeze

    module_function

    # Construct an `ApplicationsApi` bound to the sandbox. Raises if the bearer
    # token is missing -- but every sandbox example gates on the `:sandbox`
    # metadata skip (see spec_helper.rb), so this branch is never reached when
    # it is unset.
    def build_api
      if TOKEN.nil? || TOKEN.empty?
        raise 'UNIT_SANDBOX_TOKEN is required to talk to the sandbox; set it in .env or the shell.'
      end

      config = UnitFinanceSdk::Configuration.new
      config.access_token = TOKEN
      # `host=` strips the scheme and any path, so passing the full base URL is
      # safe; the scheme stays the configuration default (https).
      config.host = BASE_URL
      UnitFinanceSdk::ApplicationsApi.new(UnitFinanceSdk::ApiClient.new(config))
    end

    def build_fees_api
      if TOKEN.nil? || TOKEN.empty?
        raise 'UNIT_SANDBOX_TOKEN is required to talk to the sandbox; set it in .env or the shell.'
      end

      config = UnitFinanceSdk::Configuration.new
      config.access_token = TOKEN
      config.host = BASE_URL
      UnitFinanceSdk::FeesApi.new(UnitFinanceSdk::ApiClient.new(config))
    end

    @cached_deposit_account_id = nil

    # Returns a deposit account id from the sandbox. The Fees API is not paired
    # with an accounts list operation in this spec slice, so setup uses a direct
    # GET /accounts call with the same bearer token.
    def sandbox_deposit_account_id
      return @cached_deposit_account_id if @cached_deposit_account_id

      uri = URI("#{BASE_URL}/accounts?page%5Blimit%5D=1")
      request = Net::HTTP::Get.new(uri)
      request['Authorization'] = "Bearer #{TOKEN}"
      request['Content-Type'] = 'application/vnd.api+json'

      response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: uri.scheme == 'https') do |http|
        http.request(request)
      end
      unless response.is_a?(Net::HTTPSuccess)
        raise "Failed to list sandbox accounts: HTTP #{response.code}"
      end

      data = JSON.parse(response.body)['data']
      raise 'No deposit account found in sandbox.' if data.nil? || data.empty?

      @cached_deposit_account_id = data.first['id']
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
