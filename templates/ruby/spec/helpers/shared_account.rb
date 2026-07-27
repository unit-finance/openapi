# Shared deposit account, the Ruby analogue of Node's `sharedAccount.ts` and
# Python's `shared_account.py`.

require 'json'
require 'net/http'
require 'uri'

require_relative 'api'
require_relative 'fixtures'

module Helpers
  module SharedAccount
    @cached = nil
    @cached_individual_customer_id = nil

    module_function

    def customer_id_from_application(app)
      customer = app.relationships&.customer
      customer_id = customer&.data&.id
      raise 'Application is missing a customer relationship.' unless customer_id

      customer_id
    end

    # Seed a positive balance on a freshly created deposit account.
    #
    # TODO: Replace this raw sandbox call once the spec exposes a first-class
    # credit/funding operation (e.g. a received-ACH or book-credit endpoint).
    # The `/sandbox/payments` (achPayment, direction "Credit") simulation is NOT
    # part of the curated 0.3.0 spec, so it can't go through the generated SDK
    # yet -- we hit it directly with Net::HTTP purely as test setup. When a
    # funding endpoint is added to the spec, swap this for the generated SDK
    # method and delete the raw request below.
    def fund_deposit_account(account_id)
      uri = URI("#{Helpers::Api::BASE_URL}/sandbox/payments")
      body = {
        'data' => {
          'type' => 'achPayment',
          'attributes' => {
            'amount' => 50_000,
            'direction' => 'Credit',
            'description' => 'SDK integration test funding'
          },
          'relationships' => {
            'account' => { 'data' => { 'type' => 'depositAccount', 'id' => account_id } }
          }
        }
      }
      request = Net::HTTP::Post.new(uri)
      request['Authorization'] = "Bearer #{Helpers::Api::TOKEN}"
      request['Content-Type'] = 'application/vnd.api+json'
      request.body = JSON.generate(body)
      response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: uri.scheme == 'https') do |http|
        http.request(request)
      end
      return if response.is_a?(Net::HTTPSuccess)

      raise "Failed to fund deposit account #{account_id}: expected 2xx, got " \
            "#{response.code} body=#{response.body}"
    end

    # Poll `get_account` until the seeded credit reflects in the account's
    # available balance. The sandbox ACH credit above does not always settle
    # synchronously, so without this fee/debit suites can race the credit and
    # fail with `InsufficientFunds`.
    def wait_for_available_balance(accounts_api, account_id)
      20.times do
        resp, = accounts_api.get_account_with_http_info(account_id)
        account = Helpers::Api.unwrap(resp.data)
        available = account.attributes.available
        return if !available.nil? && available.positive?

        sleep 0.5
      end
      raise "Deposit account #{account_id} never reflected the seeded credit balance."
    end

    def create_deposit_account(fund: false)
      apps_api = Helpers::Api.build_applications_api
      accounts_api = Helpers::Api.build_accounts_api

      created, created_status, = apps_api.create_application_with_http_info(
        Helpers::Fixtures.business_application_request
      )
      raise "Expected 201 creating business application, got #{created_status}" unless created_status == 201

      app_id = Helpers::Api.unwrap(created.data).id
      app = Helpers::Api.unwrap(apps_api.get_by_id(app_id).data)
      customer_id = customer_id_from_application(app)

      account_res, account_status, = accounts_api.create_account_with_http_info(
        Helpers::Fixtures.create_deposit_account_request(customer_id)
      )
      raise "Expected 201 creating deposit account, got #{account_status}" unless account_status == 201

      account = Helpers::Api.unwrap(account_res.data)
      if fund
        fund_deposit_account(account.id)
        wait_for_available_balance(accounts_api, account.id)
      end
      {
        id: account.id,
        type: account.type,
        customer_id: customer_id,
        routing_number: account.attributes.routing_number,
        account_number: account.attributes.account_number
      }
    end

    def get_or_create
      return @cached if @cached

      @cached = create_deposit_account(fund: true)
    end

    def create_dedicated
      create_deposit_account
    end

    def individual_customer_id
      return @cached_individual_customer_id if @cached_individual_customer_id

      apps_api = Helpers::Api.build_applications_api
      created, created_status, = apps_api.create_application_with_http_info(
        Helpers::Fixtures.individual_application_request
      )
      raise "Expected 201 creating individual application, got #{created_status}" unless created_status == 201

      app_id = Helpers::Api.unwrap(created.data).id
      app = Helpers::Api.unwrap(apps_api.get_by_id(app_id).data)
      @cached_individual_customer_id = customer_id_from_application(app)
    end
  end
end
