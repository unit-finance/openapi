require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'reopen_account', :sandbox do
  it 'reopens a closed deposit account' do
    account = Helpers::SharedAccount.create_dedicated_deposit_account
    api = Helpers::Api.build_accounts_api

    _, close_status, = api.close_account_with_http_info(
      account.id,
      Helpers::Fixtures.close_deposit_account_request
    )
    expect([200, 201]).to include(close_status)

    data, status_code, = api.reopen_account_with_http_info(account.id)

    expect([200, 201]).to include(status_code)
    reopened = Helpers::Api.unwrap(data.data)
    expect(reopened.id).to eq(account.id)
    expect(reopened.attributes).not_to be_nil
  end
end
