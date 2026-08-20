require 'helpers/api'
require 'helpers/fixtures'

RSpec.describe 'list_store_locations', :sandbox do
  it 'returns store locations near the fixture postal code' do
    api = Helpers::Api.build_payments_api
    data, status_code, = api.list_store_locations_with_http_info(
      filter_postal_code: Helpers::Fixtures::US_ADDRESS['postalCode'],
      page_limit: '20'
    )

    expect(status_code).to eq(200)
    items = data.data
    expect(items).to be_an(Array)
    expect(items.length).to be <= 20
  end
end
