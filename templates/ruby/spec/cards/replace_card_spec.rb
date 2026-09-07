require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_card'

RSpec.describe 'replace_card', :sandbox do
  it 'replaces a dedicated physical card' do
    card = Helpers::SharedCard.create_dedicated_card
    api = Helpers::Api.build_cards_api

    data, status_code, = api.replace_card_with_http_info(
      card[:card_id],
      Helpers::Fixtures.replace_card_request
    )

    expect([200, 201]).to include(status_code)
    replaced = Helpers::Api.unwrap(data.data)
    expect(replaced.id).to be_a(String)
    expect(replaced.type).not_to be_nil
    expect(replaced.attributes).not_to be_nil
  end
end
