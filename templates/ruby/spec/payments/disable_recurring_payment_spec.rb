require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'disable_recurring_payment', :sandbox do
  it 'disables a recurring payment' do
    # TODO: unskip once the payments schemas are fixed. The request succeeds but
    # the response fails to deserialize: RecurringCreditBookPaymentAttributes
    # marks `transactionSummaryOverride` as required (non-nullable) while the
    # sandbox omits it, so the generated model raises during build_from_hash.
    skip 'blocked by non-nullable RecurringCreditBookPaymentAttributes.transactionSummaryOverride in the spec'

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

    data, status_code, = api.disable_recurring_payment_with_http_info(recurring_id)

    expect([200, 201]).to include(status_code)
    recurring = Helpers::Api.unwrap(data.data)
    expect(recurring.id).to eq(recurring_id)
    expect(recurring.attributes).not_to be_nil
  end
end
