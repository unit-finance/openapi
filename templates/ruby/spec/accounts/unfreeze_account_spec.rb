require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'unfreeze_account', :sandbox do
  it 'unfreezes a frozen deposit account' do
    api = Helpers::Api.build_accounts_api
    account = Helpers::SharedAccount.create_dedicated

    _frozen, frozen_status, = api.freeze_account_with_http_info(
      account[:id],
      Helpers::Fixtures.freeze_deposit_account_request
    )
    expect(frozen_status).to eq(200)

    data, status_code, = api.unfreeze_account_with_http_info(account[:id])

    expect(status_code).to eq(200)
    unfrozen = Helpers::Api.unwrap(data.data)
    expect(unfrozen.id).to eq(account[:id])
    expect(unfrozen.type).to eq('depositAccount')
    expect(unfrozen.attributes).not_to be_nil
  end
end
