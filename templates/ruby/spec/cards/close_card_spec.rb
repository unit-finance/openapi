require 'helpers/api'
require 'helpers/shared_card'

RSpec.describe 'close_card', :sandbox do
  it 'closes a dedicated card' do
    card = Helpers::SharedCard.create_dedicated_card
    api = Helpers::Api.build_cards_api

    data, status_code, = api.close_card_with_http_info(card[:card_id])

    expect([200, 201]).to include(status_code)
    closed = Helpers::Api.unwrap(data.data)
    expect(closed.id).to eq(card[:card_id])
    expect(closed.type).not_to be_nil
    expect(closed.attributes).not_to be_nil
  end
end
