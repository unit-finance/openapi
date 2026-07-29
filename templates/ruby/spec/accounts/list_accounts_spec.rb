require 'helpers/api'

RSpec.describe 'list_accounts', :sandbox do
  it 'returns a JSON:API list with pageLimit=20' do
    api = Helpers::Api.build_accounts_api
    data, status_code, = api.list_accounts_with_http_info(page_limit: '20')

    expect(status_code).to eq(200)
    expect(data.data).to be_an(Array)
    expect(data.data.length).to be <= 20
    data.data.each do |item|
      account = Helpers::Api.unwrap(item)
      expect(%w[depositAccount creditAccount walletAccount]).to include(account.type)
      expect(account.id).to be_a(String)
    end
  end
end
