require 'helpers/api'

RSpec.describe 'list_accounts', :sandbox do
  it 'returns a JSON:API list with page[limit] 20' do
    api = Helpers::Api.build_accounts_api
    data, status_code, = api.list_accounts_with_http_info(page_limit: '20')

    expect(status_code).to eq(200)
    items = data.data
    expect(items).to be_an(Array)
    expect(items.length).to be <= 20
    items.each do |raw|
      item = Helpers::Api.unwrap(raw)
      expect(item.id).to be_a(String)
      expect(item.type).not_to be_nil
    end
  end
end
