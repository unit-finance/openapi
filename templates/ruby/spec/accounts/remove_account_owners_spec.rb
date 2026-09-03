require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'remove_account_owners', :sandbox do
  it 'removes an owner from a deposit account' do
    ctx = Helpers::SharedAccount.get_or_create
    api = Helpers::Api.build_accounts_api
    created, created_status, = api.create_account_with_http_info(
      Helpers::Fixtures.create_deposit_account_request(ctx[:customer_id])
    )
    expect(created_status).to eq(201)
    account_id = Helpers::Api.unwrap(created.data).id
    api.add_account_owners_with_http_info(
      account_id,
      Helpers::Fixtures.add_account_owners_request(ctx[:individual_customer_id])
    )

    data, status_code, = api.remove_account_owners_with_http_info(
      account_id,
      Helpers::Fixtures.add_account_owners_request(ctx[:individual_customer_id])
    )

    expect(status_code).to eq(200)
    account = Helpers::Api.unwrap(data.data)
    expect(account.id).to eq(account_id)
  end
end
