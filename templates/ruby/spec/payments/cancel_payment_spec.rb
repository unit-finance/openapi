require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'cancel_payment', :sandbox do
  it 'cancels a pending ACH debit payment' do
    ctx = Helpers::SharedAccount.get_or_create
    api = Helpers::Api.build_payments_api
    created, created_status, = api.create_payment_with_http_info(
      Helpers::Fixtures.ach_debit_payment_request(ctx[:account_id])
    )
    expect(created_status).to eq(201)
    payment_id = Helpers::Api.unwrap(created.data).id

    data, status_code, = api.cancel_payment_with_http_info(payment_id)

    expect(status_code).to eq(200)
    payment = Helpers::Api.unwrap(data.data)
    expect(payment.id).to eq(payment_id)
    expect(%w[achPayment wirePayment]).to include(payment.type)
  end
end
