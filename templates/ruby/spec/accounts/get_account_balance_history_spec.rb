require 'helpers/api'
require 'helpers/shared_account'

RSpec.describe 'get_account_balance_history', :sandbox do
  it 'returns end-of-day balances for the shared account' do
    shared = Helpers::SharedAccount.get_or_create
    api = Helpers::Api.build_accounts_api

    data, status_code, = api.get_account_balance_history_with_http_info(
      filter_account_id: shared[:account_id],
      page_limit: '20'
    )

    expect(status_code).to eq(200)
    expect(data.data).to be_an(Array)
  end
end
