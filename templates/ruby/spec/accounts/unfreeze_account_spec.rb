require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'unfreeze_account', :sandbox do
  it 'unfreezes a frozen deposit account' do
    account = Helpers::SharedAccount.create_dedicated_deposit_account
    api = Helpers::Api.build_accounts_api

    _, freeze_status, = api.freeze_account_with_http_info(
      account.id,
      Helpers::Fixtures.freeze_deposit_account_request
    )
    expect([200, 201]).to include(freeze_status)

    data, status_code, = api.unfreeze_account_with_http_info(account.id)

    expect([200, 201]).to include(status_code)
    unfrozen = Helpers::Api.unwrap(data.data)
    expect(unfrozen.id).to eq(account.id)
    expect(unfrozen.attributes).not_to be_nil
  end
end
