require 'helpers/api'
require 'helpers/shared_account'

RSpec.describe 'get_account_balance_history', :sandbox do
  it 'returns end-of-day balances filtered by account id' do
    api = Helpers::Api.build_accounts_api
    shared = Helpers::SharedAccount.get_or_create

    data, status_code, = api.get_account_balance_history_with_http_info(
      page_limit: '20',
      filter_account_id: shared[:id]
    )

    expect(status_code).to eq(200)
    expect(data.data).to be_an(Array)
    expect(data.data.length).to be <= 20
    data.data.each do |item|
      balance = Helpers::Api.unwrap(item)
      expect(balance.type).to be_a(String)
      expect(balance.id).to be_a(String)
    end
  end
end
