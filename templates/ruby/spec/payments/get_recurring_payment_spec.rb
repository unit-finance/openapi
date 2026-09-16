require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'get_recurring_payment', :sandbox do
  it 'creates a recurring book payment then fetches it by id' do
    shared = Helpers::SharedAccount.get_or_create
    api = Helpers::Api.build_payments_api

    created, create_status, = api.create_recurring_payment_with_http_info(
      Helpers::Fixtures.create_recurring_book_payment_request(
        shared[:account_id],
        shared[:counterparty_account_id]
      )
    )
    expect(create_status).to eq(201)
    recurring_id = Helpers::Api.unwrap(created.data).id

    data, status_code, = api.get_recurring_payment_with_http_info(recurring_id)

    expect(status_code).to eq(200)
    recurring = Helpers::Api.unwrap(data.data)
    expect(recurring.id).to eq(recurring_id)
    expect(recurring.attributes).not_to be_nil
  end
end
