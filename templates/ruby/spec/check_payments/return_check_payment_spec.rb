require 'helpers/api'
require 'helpers/check_payments'

RSpec.describe 'return_check_payment', :sandbox do
  it 'returns a check payment that is still within the return window' do
    shared = Helpers::CheckPayments.get_or_create_shared_check_payment
    next if shared.nil?

    returned = Helpers::CheckPayments.return_or_skip(shared.id)
    next if returned.nil?

    data, status_code, = returned
    expect(status_code).to eq(200)
    payment = Helpers::Api.unwrap(data.data)
    expect(payment.type).to eq('checkPayment')
    expect(payment.id).to eq(shared.id)
    expect(payment.attributes).not_to be_nil
  end
end
