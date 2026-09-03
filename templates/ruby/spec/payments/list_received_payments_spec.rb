require 'helpers/api'

RSpec.describe 'list_received_payments', :sandbox do
  it 'returns a JSON:API list with page_limit=20' do
    api = Helpers::Api.build_payments_api
    data, status_code, = api.list_received_payments_with_http_info(page_limit: '20')

    expect(status_code).to eq(200)
    items = data.data
    expect(items).to be_an(Array)
    expect(items.length).to be <= 20
  end
end
