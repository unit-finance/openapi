require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'freeze_account', :sandbox do
  it 'freezes a dedicated deposit account' do
    account = Helpers::SharedAccount.create_dedicated_deposit_account
    api = Helpers::Api.build_accounts_api

    data, status_code, = api.freeze_account_with_http_info(
      account.id,
      Helpers::Fixtures.freeze_deposit_account_request
    )

    expect([200, 201]).to include(status_code)
    frozen = Helpers::Api.unwrap(data.data)
    expect(frozen.id).to eq(account.id)
    expect(frozen.attributes).not_to be_nil
  end
end
