require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'create_bulk_payment', :sandbox do
  it 'creates a bulk payment from a book payment payload' do
    shared = Helpers::SharedAccount.get_or_create
    api = Helpers::Api.build_payments_api

    data, status_code, = api.create_bulk_payment_with_http_info(
      Helpers::Fixtures.create_bulk_payment_request(
        shared[:account_id],
        shared[:counterparty_account_id]
      )
    )

    expect(status_code).to eq(201)
    payment = Helpers::Api.unwrap(data.data)
    expect(payment.type).to be_a(String)
    expect(payment.attributes).not_to be_nil
  end
end
