require 'helpers/api'
require 'helpers/customers'

RSpec.describe 'get_customer', :sandbox do
  it 'returns the shared business customer by id' do
    customer_id = Helpers::Customers.shared_business_customer_id
    api = Helpers::Api.build_customers_api

    data, status_code, = api.get_customer_with_http_info(customer_id)

    expect(status_code).to eq(200)
    customer = Helpers::Api.unwrap(data.data)
    expect(customer.id).to eq(customer_id)
    expect(customer.type).to eq('businessCustomer')
    expect(customer.attributes).not_to be_nil
  end
end
