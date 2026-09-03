require 'helpers/api'
require 'helpers/shared_account'

RSpec.describe 'get_account_balance_history', :sandbox do
  it 'lists end-of-day balances for an account' do
    ctx = Helpers::SharedAccount.get_or_create
    api = Helpers::Api.build_accounts_api
    data, status_code, = api.get_account_balance_history_with_http_info(
      filter_account_id: ctx[:account_id],
      page_limit: '20'
    )

    expect(status_code).to eq(200)
    items = data.data
    expect(items).to be_an(Array)
    expect(items.length).to be <= 20
  end
end
