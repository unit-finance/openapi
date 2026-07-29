require 'helpers/api'

RSpec.describe 'list_account_holds', :sandbox do
  it 'returns a JSON:API list with pageLimit=20' do
    api = Helpers::Api.build_accounts_api
    data, status_code, = api.list_account_holds_with_http_info(page_limit: '20')

    expect(status_code).to eq(200)
    expect(data.data).to be_an(Array)
    expect(data.data.length).to be <= 20
    data.data.each do |item|
      hold = Helpers::Api.unwrap(item)
      expect(hold.type).to eq('accountHold')
      expect(hold.id).to be_a(String)
    end
  end
end
