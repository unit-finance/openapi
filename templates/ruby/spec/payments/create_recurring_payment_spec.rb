require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'create_recurring_payment', :sandbox do
  it 'creates a recurring book payment' do
    ctx = Helpers::SharedAccount.get_or_create
    api = Helpers::Api.build_payments_api
    data, status_code, = api.create_recurring_payment_with_http_info(
      Helpers::Fixtures.recurring_book_payment_request(ctx[:account_id], ctx[:secondary_account_id])
    )

    expect(status_code).to eq(201)
    recurring = Helpers::Api.unwrap(data.data)
    expect(recurring.type).to eq('recurringCreditBookPayment')
    expect(recurring.id).to be_a(String)
  end
end
