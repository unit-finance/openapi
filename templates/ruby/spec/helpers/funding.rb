# Account funding, the Ruby analogue of Node's `helpers/funding.ts` and
# Python's `helpers/funding.py`.
#
# Funds a sandbox deposit account so balance-dependent operations (fees, holds,
# outbound payments) succeed instead of failing with `InsufficientFunds`.
#
# Unit's sandbox exposes a one-shot ATM deposit simulation that credits an
# account immediately. It isn't part of the generated SDK slice, so we call it
# (and the card creation it matches against) with raw HTTP. Unlike ACH-debit
# origination, it needs no Plaid processor token.
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

    # Create a business virtual debit card on the account and return its last 4
    # digits. The ATM deposit simulation matches the deposit to an existing card,
    # so a fresh account needs one before it can be funded this way. Cards aren't
    # part of the generated SDK slice, so this is a raw call. Virtual debit cards
    # are Active on creation, so the simulation can match against it immediately.
    def create_debit_card_last4(account_id)
      created = raw_post(
        '/cards',
        {
          'data' => {
            'type' => 'businessVirtualDebitCard',
            'attributes' => {
              'fullName' => { 'first' => 'Peter', 'last' => 'Parker' },
              'dateOfBirth' => '2001-08-10',
              'phone' => { 'countryCode' => '1', 'number' => '5555555555' },
              'email' => 'peter@oscorp.com',
              'address' => {
                'street' => '20 Ingram St',
                'city' => 'Forest Hills',
                'state' => 'NY',
                'postalCode' => '11375',
                'country' => 'US'
              }
            },
            'relationships' => {
              'account' => { 'data' => { 'type' => 'depositAccount', 'id' => account_id } }
            }
          }
        }
      )
      data = created['data'] || {}
      last4 = data.dig('attributes', 'last4Digits')
      raise 'Created card is missing id or last4Digits.' if data['id'].nil? || last4.nil?

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

    # Ensure `account_id` holds at least `minimum_balance` cents, funding it via a
    # simulated ATM deposit if needed. A no-op when the balance already suffices.
    def fund_account(account_id, minimum_balance)
      return if account_balance(account_id) >= minimum_balance

      last4 = create_debit_card_last4(account_id)
      # Deposit a comfortable multiple so one fund covers several downstream
      # charges within a test run.
      simulate_atm_deposit(account_id, [minimum_balance * 10, 100_000].max, last4)

      20.times do
        return if account_balance(account_id) >= minimum_balance

        Helpers::Api.sleep(1)
      end
      raise "Account #{account_id} did not reach balance #{minimum_balance} after funding."
    end
  end
end
