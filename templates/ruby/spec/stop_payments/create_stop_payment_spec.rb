require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'
require 'helpers/stop_payments'

RSpec.describe 'create_stop_payment', :sandbox do
  it 'creates a check stop payment' do
    stop_payment = Helpers::StopPayments.create_check_raw

    expect(stop_payment['id']).to be_a(String)
    expect(stop_payment['type']).to eq(Helpers::StopPayments::CHECK_TYPE)
    expect(stop_payment['attributes']).not_to be_nil
  end

  it 'creates an ACH stop payment' do
    shared = Helpers::SharedAccount.get_or_create
    api = Helpers::Api.build_stop_payments_api

    data, status_code, = api.create_stop_payment_with_http_info(
      Helpers::Fixtures.create_ach_stop_payment_request(shared[:account_id])
    )

    expect(status_code).to eq(201)
    stop_payment = Helpers::Api.unwrap(data.data)
    expect(stop_payment.id).to be_a(String)
    expect(stop_payment.type).to eq('achStopPayment')
    expect(stop_payment.attributes).not_to be_nil
  end
end
