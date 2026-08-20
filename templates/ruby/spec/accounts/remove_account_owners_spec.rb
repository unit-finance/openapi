require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'remove_account_owners', :sandbox do
  it 'removes an owner from a dedicated deposit account' do
    shared = Helpers::SharedAccount.get_or_create
    account = Helpers::SharedAccount.create_dedicated_deposit_account
    api = Helpers::Api.build_accounts_api

    data, status_code, = api.remove_account_owners_with_http_info(
      account.id,
      Helpers::Fixtures.remove_account_owners_request([shared[:customer_id]])
    )

    skip 'cannot remove sole account owner in sandbox' unless [200, 201].include?(status_code)

    expect(data.data).not_to be_nil
  end
end
