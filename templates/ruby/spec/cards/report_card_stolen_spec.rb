require 'helpers/api'
require 'helpers/shared_card'

RSpec.describe 'report_card_stolen', :sandbox do
  it 'reports a dedicated card as stolen' do
    card = Helpers::SharedCard.create_dedicated_virtual_card
    api = Helpers::Api.build_cards_api

    data, status_code, = api.report_card_stolen_with_http_info(card[:card_id])

    expect([200, 201]).to include(status_code)
    reported = Helpers::Api.unwrap(data.data)
    expect(reported.id).to eq(card[:card_id])
    expect(reported.type).not_to be_nil
    expect(reported.attributes).not_to be_nil
  end
end
