require 'helpers/api'
require 'helpers/shared_account'

RSpec.describe 'get_account', :sandbox do
  it 'returns the account by id' do
    ctx = Helpers::SharedAccount.get_or_create
    api = Helpers::Api.build_accounts_api
    data, status_code, = api.get_account_with_http_info(ctx[:account_id])

    expect(status_code).to eq(200)
    account = Helpers::Api.unwrap(data.data)
    expect(account.id).to eq(ctx[:account_id])
    expect(account.type).to eq('depositAccount')
    expect(account.attributes).not_to be_nil
  end
end
