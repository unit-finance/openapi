require 'helpers/api'
require 'helpers/shared_card'

RSpec.describe 'get_card', :sandbox do
  it 'returns the shared card by id' do
    shared = Helpers::SharedCard.get_or_create
    api = Helpers::Api.build_cards_api

    data, status_code, = api.get_card_with_http_info(shared[:card_id])

    expect(status_code).to eq(200)
    card = Helpers::Api.unwrap(data.data)
    expect(card.id).to eq(shared[:card_id])
    expect(card.type).not_to be_nil
    expect(card.attributes).not_to be_nil
  end
end
