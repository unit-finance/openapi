require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'freeze_account', :sandbox do
  it 'freezes a dedicated deposit account' do
    api = Helpers::Api.build_accounts_api
    account = Helpers::SharedAccount.create_dedicated

    data, status_code, = api.freeze_account_with_http_info(
      account[:id],
      Helpers::Fixtures.freeze_deposit_account_request
    )

    expect(status_code).to eq(200)
    frozen = Helpers::Api.unwrap(data.data)
    expect(frozen.id).to eq(account[:id])
    expect(frozen.type).to eq('depositAccount')
    expect(frozen.attributes).not_to be_nil
    expect(frozen.attributes.status).not_to be_nil
  end
end
