require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'update_account', :sandbox do
  it 'PATCHes the shared deposit account' do
    api = Helpers::Api.build_accounts_api
    shared = Helpers::SharedAccount.get_or_create

    data, status_code, = api.update_account_with_http_info(
      shared[:id],
      Helpers::Fixtures.update_deposit_account_request
    )

    expect(status_code).to eq(200)
    account = Helpers::Api.unwrap(data.data)
    expect(account.id).to eq(shared[:id])
    expect(account.type).to eq('depositAccount')
    expect(account.attributes).not_to be_nil
  end
end
