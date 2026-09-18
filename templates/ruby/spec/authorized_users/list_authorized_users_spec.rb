require 'helpers/api'
require 'helpers/authorized_users'
require 'helpers/customers'

RSpec.describe 'list_authorized_users', :sandbox do
  it 'returns a JSON:API list of authorized users' do
    customer_id = Helpers::Customers.shared_business_customer_id
    Helpers::AuthorizedUsers.add_or_skip(customer_id)

    status_code, document = Helpers::AuthorizedUsers.list_raw(customer_id)

    expect(status_code).to eq(200)
    items = document['data']
    expect(items).to be_an(Array)
    items.each do |item|
      if item.key?('id')
        expect(item['id']).to be_a(String)
        expect(item['type']).to be_a(String)
        expect(item).to have_key('attributes')
      else
        expect(item).to have_key('fullName')
        expect(item['email']).to be_a(String)
        expect(item).to have_key('phone')
      end
    end
  end
end
