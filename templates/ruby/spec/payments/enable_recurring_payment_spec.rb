require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'enable_recurring_payment', :sandbox do
  it 'enables a disabled recurring payment' do
    ctx = Helpers::SharedAccount.get_or_create
    api = Helpers::Api.build_payments_api
    created, created_status, = api.create_recurring_payment_with_http_info(
      Helpers::Fixtures.recurring_book_payment_request(ctx[:account_id], ctx[:secondary_account_id])
    )
    expect(created_status).to eq(201)
    recurring_id = Helpers::Api.unwrap(created.data).id
    api.disable_recurring_payment_with_http_info(recurring_id)

    data, status_code, = api.enable_recurring_payment_with_http_info(recurring_id)

    expect(status_code).to eq(200)
    recurring = Helpers::Api.unwrap(data.data)
    expect(recurring.id).to eq(recurring_id)
  end
end
