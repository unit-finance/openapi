require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'create_account', :sandbox do
  it 'creates a deposit account' do
    shared = Helpers::SharedAccount.get_or_create
    api = Helpers::Api.build_accounts_api

    data, status_code, = api.create_account_with_http_info(
      Helpers::Fixtures.create_deposit_account_request(shared[:customer_id])
    )

    expect(status_code).to eq(201)
    account = Helpers::Api.unwrap(data.data)
    expect(account.type).to eq('depositAccount')
    expect(account.id).to be_a(String)
    expect(account.attributes).not_to be_nil
  end
end
