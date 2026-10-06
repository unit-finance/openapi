require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/stop_payments'

RSpec.describe 'update_ach_stop_payment', :sandbox do
  it 'updates the expiration and tags of an ACH stop payment' do
    stop_payment_id = Helpers::StopPayments.create_ach_id

    api = Helpers::Api.build_stop_payments_api
    data, status_code, = api.update_ach_stop_payment_with_http_info(
      stop_payment_id, Helpers::Fixtures.update_ach_stop_payment_request
    )

    expect(status_code).to eq(200)
    stop_payment = Helpers::Api.unwrap(data.data)
    expect(stop_payment.id).to eq(stop_payment_id)
    expect(stop_payment.type).to eq('achStopPayment')
    expect(stop_payment.attributes).not_to be_nil
  end
end
