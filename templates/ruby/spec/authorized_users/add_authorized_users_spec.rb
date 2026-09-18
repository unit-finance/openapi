require 'helpers/api'
require 'helpers/authorized_users'
require 'helpers/customers'

RSpec.describe 'add_authorized_users', :sandbox do
  it 'adds an authorized user to the shared business customer' do
    customer_id = Helpers::Customers.shared_business_customer_id
    added = Helpers::AuthorizedUsers.add_or_skip(customer_id)
    next if added.nil?

    data, status_code, = added
    expect([200, 201]).to include(status_code)
    customer = Helpers::Api.unwrap(data.data)
    expect(customer.id).to eq(customer_id)
    expect(customer.type).to be_a(String)
    expect(customer.attributes).not_to be_nil
  end
end
