require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'cancel_payment', :sandbox do
  it 'cancels a pending payment' do
    shared = Helpers::SharedAccount.get_or_create
    api = Helpers::Api.build_payments_api

    created, create_status, = api.create_payment_with_http_info(
      Helpers::Fixtures.create_book_payment_request(
        shared[:account_id],
        shared[:counterparty_account_id]
      )
    )
    expect(create_status).to eq(201)
    payment = Helpers::Api.unwrap(created.data)
    skip 'payment is not in a cancellable state' unless %w[Pending PendingReview].include?(payment.attributes.status)

    data, status_code, = api.cancel_payment_with_http_info(payment.id)

    expect([200, 201]).to include(status_code)
    canceled = Helpers::Api.unwrap(data.data)
    expect(canceled.id).to eq(payment.id)
    expect(canceled.attributes).not_to be_nil
  end
end
