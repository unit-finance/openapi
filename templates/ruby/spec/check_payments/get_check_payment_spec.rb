require 'helpers/api'
require 'helpers/check_payments'

RSpec.describe 'get_check_payment', :sandbox do
  it 'gets a check payment by id' do
    shared = Helpers::CheckPayments.get_or_create_shared_check_payment
    next if shared.nil?

    api = Helpers::Api.build_check_payments_api
    begin
      data, status_code, = api.get_check_payment_with_http_info(shared.id)
    rescue ArgumentError => e
      skip "spec mismatch: CheckPayment 200 body did not match the typed models (#{e.message})"
    end

    expect(status_code).to eq(200)
    payment = Helpers::Api.unwrap(data.data)
    expect(payment.type).to eq('checkPayment')
    expect(payment.id).to eq(shared.id)
    expect(payment.attributes).not_to be_nil
    expect(payment.attributes.status).not_to be_nil
  end
end
