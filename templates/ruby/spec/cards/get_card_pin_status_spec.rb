require 'helpers/api'
require 'helpers/shared_card'

RSpec.describe 'get_card_pin_status', :sandbox do
  it 'returns the PIN status for the shared card' do
    shared = Helpers::SharedCard.get_or_create
    api = Helpers::Api.build_cards_api

    data, status_code, = api.get_card_pin_status_with_http_info(shared[:card_id])

    expect(status_code).to eq(200)
    expect(data.data).not_to be_nil
    expect(data.data.type).not_to be_nil
  end
end
