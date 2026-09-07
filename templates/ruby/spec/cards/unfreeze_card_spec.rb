require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_card'

RSpec.describe 'unfreeze_card', :sandbox do
  it 'freezes then unfreezes a dedicated card' do
    card = Helpers::SharedCard.create_dedicated_card
    api = Helpers::Api.build_cards_api

    _, freeze_status, = api.freeze_card_with_http_info(
      card[:card_id],
      Helpers::Fixtures.freeze_card_request
    )
    expect([200, 201]).to include(freeze_status)

    data, status_code, = api.unfreeze_card_with_http_info(card[:card_id])

    expect([200, 201]).to include(status_code)
    unfrozen = Helpers::Api.unwrap(data.data)
    expect(unfrozen.id).to eq(card[:card_id])
    expect(unfrozen.type).not_to be_nil
    expect(unfrozen.attributes).not_to be_nil
  end
end
