require 'helpers/api'
require 'helpers/cardholder_tokens'
require 'helpers/shared_card'

RSpec.describe 'create_cardholder_token_verification', :sandbox do
  it 'starts an OTP challenge for the shared card' do
    shared = Helpers::SharedCard.get_or_create
    api = Helpers::Api.build_card_holder_api_tokens_api

    result = Helpers::CardholderTokens.create_verification_or_skip(api, shared[:card_id])
    next if result.nil?

    data, status_code, = result
    expect(status_code).to eq(201)
    expect(data.data).not_to be_nil
    expect(data.data.type).to eq('cardholderTokenVerification')
  end
end
