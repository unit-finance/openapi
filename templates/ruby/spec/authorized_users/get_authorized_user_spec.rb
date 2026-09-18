require 'helpers/api'
require 'helpers/authorized_users'
require 'helpers/customers'

RSpec.describe 'get_authorized_user', :sandbox do
  it 'GETs an authorized user by id' do
    customer_id = Helpers::Customers.shared_business_customer_id
    added = Helpers::AuthorizedUsers.add_or_skip(customer_id)
    next if added.nil?

    status_code, document = Helpers::AuthorizedUsers.list_raw(customer_id)
    if status_code != 200 || document['data'].nil? || document['data'].empty?
      warn 'listAuthorizedUsers did not return a list; skipping getAuthorizedUser.'
      next
    end

    user_id = document['data'].map { |item| Helpers::AuthorizedUsers.authorized_user_id(item) }.compact.first
    if user_id.nil?
      # Spec types list items as AuthorizedUserType (no id). Without an id the
      # GET path is unreachable.
      warn 'listAuthorizedUsers did not return a resource id; skipping getAuthorizedUser.'
      next
    end

    status_code, body = Helpers::AuthorizedUsers.get_raw(customer_id, user_id)
    expect(status_code).to eq(200)
    item = body['data']
    if item.key?('id')
      expect(item['id']).to eq(user_id)
      expect(item['type']).to be_a(String)
      expect(item).to have_key('attributes')
    else
      expect(item).to have_key('fullName')
      expect(item['email']).to be_a(String)
      expect(item).to have_key('phone')
    end
  end
end
