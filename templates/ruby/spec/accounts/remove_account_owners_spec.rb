require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'remove_account_owners', :sandbox do
  it 'removes an individual customer from a joint deposit account' do
    api = Helpers::Api.build_accounts_api
    account = Helpers::SharedAccount.create_dedicated
    individual_customer_id = Helpers::SharedAccount.individual_customer_id

    _added, added_status, = api.add_account_owners_with_http_info(
      account[:id],
      Helpers::Fixtures.add_account_owners_request(individual_customer_id)
    )
    expect(added_status).to eq(200)

    data, status_code, = api.remove_account_owners_with_http_info(
      account[:id],
      Helpers::Fixtures.remove_account_owners_request(individual_customer_id)
    )

    expect(status_code).to eq(200)
    updated = Helpers::Api.unwrap(data.data)
    expect(updated.id).to eq(account[:id])
    expect(updated.type).to eq('depositAccount')
    expect(updated.attributes).not_to be_nil
  end
end
