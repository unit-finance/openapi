require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'unfreeze_account', :sandbox do
  it 'unfreezes a frozen deposit account' do
    ctx = Helpers::SharedAccount.get_or_create
    api = Helpers::Api.build_accounts_api
    created, created_status, = api.create_account_with_http_info(
      Helpers::Fixtures.create_deposit_account_request(ctx[:customer_id])
    )
    expect(created_status).to eq(201)
    account_id = Helpers::Api.unwrap(created.data).id
    api.freeze_account_with_http_info(
      account_id,
      Helpers::Fixtures.freeze_deposit_account_request
    )

    data, status_code, = api.unfreeze_account_with_http_info(account_id)

    expect(status_code).to eq(200)
    account = Helpers::Api.unwrap(data.data)
    expect(account.id).to eq(account_id)
    expect(account.attributes.status).to eq('Open')
  end
end
