require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'create_recurring_payment', :sandbox do
  it 'creates a recurring book payment' do
    shared = Helpers::SharedAccount.get_or_create
    api = Helpers::Api.build_payments_api

    data, status_code, = api.create_recurring_payment_with_http_info(
      Helpers::Fixtures.create_recurring_book_payment_request(
        shared[:account_id],
        shared[:counterparty_account_id]
      )
    )

    expect(status_code).to eq(201)
    recurring = Helpers::Api.unwrap(data.data)
    expect(recurring.id).to be_a(String)
    expect(recurring.type).not_to be_nil
    expect(recurring.attributes).not_to be_nil
  end
end
