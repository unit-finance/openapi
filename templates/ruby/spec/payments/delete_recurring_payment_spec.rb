require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'delete_recurring_payment', :sandbox do
  it 'deletes a recurring payment' do
    ctx = Helpers::SharedAccount.get_or_create
    api = Helpers::Api.build_payments_api
    created, created_status, = api.create_recurring_payment_with_http_info(
      Helpers::Fixtures.recurring_book_payment_request(ctx[:account_id], ctx[:secondary_account_id])
    )
    expect(created_status).to eq(201)
    recurring_id = Helpers::Api.unwrap(created.data).id

    _data, status_code, = api.delete_recurring_payment_with_http_info(recurring_id)

    expect(status_code).to eq(204)
  end
end
