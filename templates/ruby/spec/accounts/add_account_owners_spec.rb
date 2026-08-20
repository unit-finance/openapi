require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'add_account_owners', :sandbox do
  it 'adds an owner to a dedicated deposit account' do
    shared = Helpers::SharedAccount.get_or_create
    account = Helpers::SharedAccount.create_dedicated_deposit_account
    api = Helpers::Api.build_accounts_api

    _, remove_status, = api.remove_account_owners_with_http_info(
      account.id,
      Helpers::Fixtures.remove_account_owners_request([shared[:customer_id]])
    )
    skip 'cannot remove sole account owner in sandbox' unless [200, 201].include?(remove_status)

    data, status_code, = api.add_account_owners_with_http_info(
      account.id,
      Helpers::Fixtures.add_account_owners_request([shared[:customer_id]])
    )

    expect([200, 201]).to include(status_code)
    expect(data.data).not_to be_nil
  end
end
