require 'helpers/api'
require 'helpers/shared_card'

RSpec.describe 'get_card_limits', :sandbox do
  it 'returns limits for the shared card' do
    shared = Helpers::SharedCard.get_or_create
    api = Helpers::Api.build_cards_api

    data, status_code, = api.get_card_limits_with_http_info(shared[:card_id])

    expect(status_code).to eq(200)
    expect(data.data).not_to be_nil
  end
end
