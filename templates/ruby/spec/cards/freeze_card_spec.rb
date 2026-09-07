require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_card'

RSpec.describe 'freeze_card', :sandbox do
  it 'freezes a dedicated card' do
    card = Helpers::SharedCard.create_dedicated_card
    api = Helpers::Api.build_cards_api

    data, status_code, = api.freeze_card_with_http_info(
      card[:card_id],
      Helpers::Fixtures.freeze_card_request
    )

    expect([200, 201]).to include(status_code)
    frozen = Helpers::Api.unwrap(data.data)
    expect(frozen.id).to eq(card[:card_id])
    expect(frozen.type).not_to be_nil
    expect(frozen.attributes).not_to be_nil
  end
end
