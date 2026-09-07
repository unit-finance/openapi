require 'helpers/api'

RSpec.describe 'clear_ach_debit_payment', :sandbox do
  it 'clears an ACH debit payment in clearing status' do
    api = Helpers::Api.build_payments_api

    # Mirror the Node suite: there is no list-payments endpoint to discover an
    # ACH debit in Clearing status, so this can only run when a caller supplies a
    # known payment id via env var. Otherwise return early (passing).
    payment_id = ENV['UNIT_SANDBOX_ACH_DEBIT_PAYMENT_ID']
    next if payment_id.nil? || payment_id.empty?

    data, status_code, = api.clear_ach_debit_payment_with_http_info(payment_id)

    expect([200, 201]).to include(status_code)
    expect(data.data).not_to be_nil
  end
end
