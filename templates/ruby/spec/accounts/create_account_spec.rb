require 'helpers/api'
require 'helpers/fixtures'

RSpec.describe 'create_account', :sandbox do
  it 'creates a deposit account for an approved business customer' do
    apps_api = Helpers::Api.build_applications_api
    accounts_api = Helpers::Api.build_accounts_api

    created, created_status, = apps_api.create_application_with_http_info(
      Helpers::Fixtures.business_application_request
    )
    expect(created_status).to eq(201)

    app_id = Helpers::Api.unwrap(created.data).id
    app = Helpers::Api.unwrap(apps_api.get_by_id(app_id).data)
    customer_id = app.relationships.customer.data.id
    expect(customer_id).not_to be_nil

    data, status_code, = accounts_api.create_account_with_http_info(
      Helpers::Fixtures.create_deposit_account_request(customer_id)
    )

    expect(status_code).to eq(201)
    account = Helpers::Api.unwrap(data.data)
    expect(account.type).to eq('depositAccount')
    expect(account.id).to be_a(String)
    expect(account.attributes).not_to be_nil
    expect(account.attributes.deposit_product).not_to be_nil
    expect(account.attributes.status).not_to be_nil
  end
end
