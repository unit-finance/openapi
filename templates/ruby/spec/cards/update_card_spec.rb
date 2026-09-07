require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_card'

RSpec.describe 'update_card', :sandbox do
  it 'updates a dedicated card' do
    card = Helpers::SharedCard.create_dedicated_card
    api = Helpers::Api.build_cards_api

    data, status_code, = api.update_card_with_http_info(
      card[:card_id],
      Helpers::Fixtures.update_card_request
    )

    expect([200, 201]).to include(status_code)
    updated = Helpers::Api.unwrap(data.data)
    expect(updated.id).to eq(card[:card_id])
    expect(updated.type).not_to be_nil
    expect(updated.attributes).not_to be_nil
  end
end
