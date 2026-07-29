require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'reopen_account', :sandbox do
  it 'reopens a closed deposit account' do
    api = Helpers::Api.build_accounts_api
    account = Helpers::SharedAccount.create_dedicated

    _closed, closed_status, = api.close_account_with_http_info(
      account[:id],
      Helpers::Fixtures.close_deposit_account_request
    )
    expect(closed_status).to eq(200)

    data, status_code, = api.reopen_account_with_http_info(account[:id])

    expect(status_code).to eq(200)
    reopened = Helpers::Api.unwrap(data.data)
    expect(reopened.id).to eq(account[:id])
    expect(reopened.type).to eq('depositAccount')
    expect(reopened.attributes).not_to be_nil
  end
end
