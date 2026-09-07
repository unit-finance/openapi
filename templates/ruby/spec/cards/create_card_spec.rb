require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'create_card', :sandbox do
  it 'creates a business debit card for the shared account' do
    shared = Helpers::SharedAccount.get_or_create
    api = Helpers::Api.build_cards_api

    data, status_code, = api.create_card_with_http_info(
      Helpers::Fixtures.create_business_debit_card_request(shared[:account_id])
    )

    expect(status_code).to eq(201)
    card = Helpers::Api.unwrap(data.data)
    expect(card.type).to eq('businessDebitCard')
    expect(card.id).to be_a(String)
    expect(card.attributes).not_to be_nil
  end
end
