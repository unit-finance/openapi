# Account funding, the Ruby analogue of Node's `helpers/funding.ts`.
#
# Funds a sandbox deposit account so balance-dependent operations (fees, holds,
# outbound payments) succeed instead of failing with `InsufficientFunds`.
#
# The ATM deposit simulation is not in the OpenAPI spec, so it is called with
# raw HTTP. The card the simulation matches against is created with CardsApi.
#
# See https://www.unit.co/docs/api/cards/simulations/#create-atm-deposit

require 'json'
require 'net/http'
require 'uri'
require_relative 'api'
require_relative 'fixtures'

module Helpers
  module Funding
    JSON_API_HEADERS = {
      'Content-Type' => 'application/vnd.api+json',
      'Accept' => 'application/vnd.api+json'
    }.freeze

    module_function

    def raw_post(pathname, body)
      uri = URI.parse("#{Helpers::Api::BASE_URL}#{pathname}")
      request = Net::HTTP::Post.new(uri)
      request['Authorization'] = "Bearer #{Helpers::Api::TOKEN}"
      JSON_API_HEADERS.each { |k, v| request[k] = v }
      request.body = JSON.generate(body)

      response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: uri.scheme == 'https') do |http|
        http.request(request)
      end

      unless response.is_a?(Net::HTTPSuccess)
        raise "POST #{pathname} -> HTTP #{response.code}: #{response.body}"
      end

      JSON.parse(response.body)
    end

    def account_balance(account_id)
      data, = Helpers::Api.build_accounts_api.get_account_with_http_info(account_id)
      Helpers::Api.unwrap(data.data).attributes.balance || 0
    end

    # Create a business virtual debit card and return its last 4 digits.
    # Virtual debit cards are Active on creation, so the ATM simulation can
    # match against the card immediately.
    def create_debit_card_last4(account_id)
      data, status_code, = Helpers::Api.build_cards_api.create_card_with_http_info(
        Helpers::Fixtures.create_business_virtual_debit_card_request(account_id)
      )
      raise "Failed to create card: expected status 201, got #{status_code}." unless status_code == 201

      card = Helpers::Api.unwrap(data.data)
      last4 = card.attributes.last_4_digits
      raise 'Created card is missing id or last4Digits.' if card.id.nil? || last4.nil?

      last4
    end

    def simulate_atm_deposit(account_id, amount, last4_digits)
      raw_post(
        '/sandbox/atm-deposits',
        {
          'data' => {
            'type' => 'atmTransaction',
            'attributes' => {
              'amount' => amount,
              'atmName' => 'SDK Test ATM',
              'atmLocation' => 'Cupertino, CA, US',
              'last4Digits' => last4_digits
            },
            'relationships' => {
              'account' => { 'data' => { 'type' => 'depositAccount', 'id' => account_id } }
            }
          }
        }
      )
    end

    def fund_account(account_id, minimum_balance)
      return if account_balance(account_id) >= minimum_balance

      last4 = create_debit_card_last4(account_id)
      simulate_atm_deposit(account_id, [minimum_balance * 10, 100_000].max, last4)

      20.times do
        return if account_balance(account_id) >= minimum_balance

        Helpers::Api.sleep(1)
      end
      raise "Account #{account_id} did not reach balance #{minimum_balance} after funding."
    end
  end
end
