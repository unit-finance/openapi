require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'add_account_owners', :sandbox do
  it 'adds an individual customer as a joint account owner' do
    api = Helpers::Api.build_accounts_api
    account = Helpers::SharedAccount.create_dedicated
    individual_customer_id = Helpers::SharedAccount.individual_customer_id

    data, status_code, = api.add_account_owners_with_http_info(
      account[:id],
      Helpers::Fixtures.add_account_owners_request(individual_customer_id)
    )

    expect(status_code).to eq(200)
    updated = Helpers::Api.unwrap(data.data)
    expect(updated.id).to eq(account[:id])
    expect(updated.type).to eq('depositAccount')
    expect(updated.attributes).not_to be_nil
  end
end
