require 'helpers/api'
require 'helpers/fixtures'

RSpec.describe 'create_business_wallet_customer', :sandbox do
  # Skipped: the sandbox org behind UNIT_SANDBOX_TOKEN has no partner bank named
  # "Thread" (the create request 404s with "The specified bank was not found").
  # The available banks are org config we can't query from this SDK's spec
  # surface. Re-enable (remove the `skip`) once the fixture's bank_name is set to
  # a bank provisioned for the sandbox org.
  it 'creates a business wallet customer' do
    skip("sandbox org has no 'Thread' partner bank; see comment")
    api = Helpers::Api.build_customers_api

    data, status_code, = api.create_business_wallet_customer_with_http_info(
      Helpers::Fixtures.create_business_wallet_customer_request
    )

    expect(status_code).to eq(201)
    customer = Helpers::Api.unwrap(data.data)
    expect(customer.type).to eq('businessWalletCustomer')
    expect(customer.id).to be_a(String)
    expect(customer.attributes).not_to be_nil
  end
end
