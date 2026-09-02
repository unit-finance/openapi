require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/individual_customer'

RSpec.describe 'remove_account_owners', :sandbox do
  it 'removes an owner from a dedicated deposit account' do
    api = Helpers::Api.build_accounts_api
    # Owners can only be added to an account whose existing owners are all
    # individuals -- Unit rejects mixing a business owner with individuals.
    # Add a second owner first so the account still has one after removal (an
    # account must always retain at least one owner).
    account = Helpers::IndividualCustomer.create_individual_deposit_account
    owner_customer_id = Helpers::IndividualCustomer.create_individual_customer_id

    _, add_status, = api.add_account_owners_with_http_info(
      account.id,
      Helpers::Fixtures.add_account_owners_request([owner_customer_id])
    )
    expect([200, 201]).to include(add_status)

    data, status_code, = api.remove_account_owners_with_http_info(
      account.id,
      Helpers::Fixtures.remove_account_owners_request([owner_customer_id])
    )

    expect([200, 201]).to include(status_code)
    removed = Helpers::Api.unwrap(data.data)
    expect(removed.id).to eq(account.id)
    expect(removed.type).to eq('depositAccount')
    expect(removed.attributes).not_to be_nil
  end
end
