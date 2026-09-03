require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'update_account', :sandbox do
  it 'updates a deposit account' do
    ctx = Helpers::SharedAccount.get_or_create
    api = Helpers::Api.build_accounts_api
    data, status_code, = api.update_account_with_http_info(
      ctx[:account_id],
      Helpers::Fixtures.update_deposit_account_request
    )

    expect(status_code).to eq(200)
    account = Helpers::Api.unwrap(data.data)
    expect(account.id).to eq(ctx[:account_id])
    expect(account.type).to eq('depositAccount')
  end
end
