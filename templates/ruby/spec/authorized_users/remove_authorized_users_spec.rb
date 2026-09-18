require 'helpers/api'
require 'helpers/authorized_users'
require 'helpers/customers'
require 'helpers/fixtures'

RSpec.describe 'remove_authorized_users', :sandbox do
  it 'removes an authorized user from the shared business customer' do
    api = Helpers::Api.build_authorized_users_api
    customer_id = Helpers::Customers.shared_business_customer_id
    added = Helpers::AuthorizedUsers.add_or_skip(customer_id)
    next if added.nil?

    _data, _status, user = added
    data, status_code, = api.remove_authorized_users_with_http_info(
      customer_id,
      Helpers::Fixtures.remove_authorized_users_request([user['email']])
    )

    expect([200, 201]).to include(status_code)
    customer = Helpers::Api.unwrap(data.data)
    expect(customer.id).to eq(customer_id)
    expect(customer.type).to be_a(String)
    expect(customer.attributes).not_to be_nil
  end
end
