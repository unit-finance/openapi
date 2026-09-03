require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'update_payment', :sandbox do
  it 'updates a book payment' do
    ctx = Helpers::SharedAccount.get_or_create
    api = Helpers::Api.build_payments_api
    created, created_status, = api.create_payment_with_http_info(
      Helpers::Fixtures.book_payment_request(ctx[:account_id], ctx[:secondary_account_id])
    )
    expect(created_status).to eq(201)
    payment_id = Helpers::Api.unwrap(created.data).id

    data, status_code, = api.update_payment_with_http_info(
      payment_id,
      Helpers::Fixtures.update_book_payment_request
    )

    expect(status_code).to eq(200)
    payment = Helpers::Api.unwrap(data.data)
    expect(payment.id).to eq(payment_id)
    expect(payment.type).to eq('bookPayment')
  end
end
