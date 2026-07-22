require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'close_account', :sandbox do
  it 'closes a dedicated deposit account' do
    api = Helpers::Api.build_accounts_api
    account = Helpers::SharedAccount.create_dedicated

    data, status_code, = api.close_account_with_http_info(
      account[:id],
      Helpers::Fixtures.close_deposit_account_request
    )

    expect(status_code).to eq(200)
    closed = Helpers::Api.unwrap(data.data)
    expect(closed.id).to eq(account[:id])
    expect(closed.type).to eq('depositAccount')
    expect(closed.attributes).not_to be_nil
    expect(closed.attributes.status).not_to be_nil
  end
end
