require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'update_account', :sandbox do
  it 'patches the shared deposit account' do
    shared = Helpers::SharedAccount.get_or_create
    api = Helpers::Api.build_accounts_api

    data, status_code, = api.update_account_with_http_info(
      shared[:account_id],
      Helpers::Fixtures.update_deposit_account_request
    )

    expect([200, 201]).to include(status_code)
    account = Helpers::Api.unwrap(data.data)
    expect(account.id).to eq(shared[:account_id])
    expect(account.attributes).not_to be_nil
  end
end
