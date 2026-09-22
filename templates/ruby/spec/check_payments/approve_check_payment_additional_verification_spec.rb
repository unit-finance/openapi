require 'helpers/api'
require 'helpers/check_payments'

RSpec.describe 'approve_check_payment_additional_verification', :sandbox do
  it 'approves additional verification when the payment requires it' do
    shared = Helpers::CheckPayments.get_or_create_shared_check_payment
    next if shared.nil?

    approved = Helpers::CheckPayments.approve_or_skip(shared.id)
    next if approved.nil?

    data, status_code, = approved
    expect(status_code).to eq(200)
    payment = Helpers::Api.unwrap(data.data)
    expect(payment.type).to eq('checkPayment')
    expect(payment.id).to eq(shared.id)
    expect(payment.attributes).not_to be_nil
  end
end
