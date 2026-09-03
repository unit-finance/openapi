require 'helpers/api'

RSpec.describe 'list_store_locations', :sandbox do
  it 'returns store locations for a postal code' do
    api = Helpers::Api.build_payments_api
    data, status_code, = api.list_store_locations_with_http_info(filter_postal_code: '11375')

    expect(status_code).to eq(200)
    expect(data.data).to be_an(Array)
  end
end
