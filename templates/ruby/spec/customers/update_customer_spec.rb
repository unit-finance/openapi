require 'helpers/api'
require 'helpers/customers'
require 'helpers/fixtures'

RSpec.describe 'update_customer', :sandbox do
  it 'patches the shared business customer' do
    customer_id = Helpers::Customers.shared_business_customer_id
    api = Helpers::Api.build_customers_api

    data, status_code, = api.update_customer_with_http_info(
      customer_id,
      Helpers::Fixtures.update_business_customer_request
    )

    expect([200, 201]).to include(status_code)
    customer = Helpers::Api.unwrap(data.data)
    expect(customer.id).to eq(customer_id)
    expect(customer.type).to eq('businessCustomer')
  end
end
