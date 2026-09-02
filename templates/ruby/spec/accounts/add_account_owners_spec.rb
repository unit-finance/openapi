require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/individual_customer'

RSpec.describe 'add_account_owners', :sandbox do
  it 'adds an owner to a dedicated deposit account' do
    api = Helpers::Api.build_accounts_api
    # Owners can only be added to an account whose existing owners are all
    # individuals -- Unit rejects mixing a business owner with individuals.
    account = Helpers::IndividualCustomer.create_individual_deposit_account
    owner_customer_id = Helpers::IndividualCustomer.create_individual_customer_id

    data, status_code, = api.add_account_owners_with_http_info(
      account.id,
      Helpers::Fixtures.add_account_owners_request([owner_customer_id])
    )

    expect([200, 201]).to include(status_code)
    added = Helpers::Api.unwrap(data.data)
    expect(added.id).to eq(account.id)
    expect(added.type).to eq('depositAccount')
    expect(added.attributes).not_to be_nil
  end
end
