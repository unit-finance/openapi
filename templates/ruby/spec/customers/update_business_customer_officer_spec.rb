require 'helpers/api'
require 'helpers/customers'
require 'helpers/fixtures'

RSpec.describe 'update_business_customer_officer', :sandbox do
  # Skipped: blocked on an upstream spec fix. Officer.attributes marks `status`
  # required, but the sandbox omits it on the 200 response, so the strict Ruby
  # model raises during deserialization (the PATCH itself succeeds). Node's axios
  # client doesn't validate response fields, so its equivalent test still runs.
  # Re-enable (remove the `skip`) once `status` is optional in the spec.
  it 'patches the shared business customer officer' do
    skip("Blocked on upstream spec fix: Officer.attributes.status wrongly required; won't deserialize.")
    customer_id, officer_id = Helpers::Customers.shared_business_customer_officer_id
    api = Helpers::Api.build_customers_api

    data, status_code, = api.update_business_customer_officer_with_http_info(
      customer_id,
      officer_id,
      Helpers::Fixtures.update_business_customer_officer_request
    )

    expect([200, 201]).to include(status_code)
    officer = Helpers::Api.unwrap(data.data)
    expect(officer.type).to eq('officer')
    expect(officer.attributes).not_to be_nil
  end
end
