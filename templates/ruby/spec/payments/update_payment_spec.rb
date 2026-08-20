require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'update_payment', :sandbox do
  it 'patches a book payment' do
    shared = Helpers::SharedAccount.get_or_create
    api = Helpers::Api.build_payments_api

    created, create_status, = api.create_payment_with_http_info(
      Helpers::Fixtures.create_book_payment_request(
        shared[:account_id],
        shared[:counterparty_account_id]
      )
    )
    expect(create_status).to eq(201)
    payment_id = Helpers::Api.unwrap(created.data).id

    data, status_code, = api.update_payment_with_http_info(
      payment_id,
      Helpers::Fixtures.update_book_payment_request
    )

    expect([200, 201]).to include(status_code)
    payment = Helpers::Api.unwrap(data.data)
    expect(payment.id).to eq(payment_id)
    expect(payment.attributes).not_to be_nil
  end
end
