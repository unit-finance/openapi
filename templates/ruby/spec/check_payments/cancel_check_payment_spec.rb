require 'helpers/api'
require 'helpers/check_payments'
require 'helpers/shared_account'

RSpec.describe 'cancel_check_payment', :sandbox do
  it 'cancels a pending originated check payment' do
    shared = Helpers::SharedAccount.get_or_create
    created = Helpers::CheckPayments.originate_or_skip(
      shared[:account_id],
      shared[:customer_id]
    )
    next if created.nil?

    payment = Helpers::Api.unwrap(created[0].data)
    canceled = Helpers::CheckPayments.cancel_or_skip(payment.id)
    next if canceled.nil?

    data, status_code, = canceled
    expect(status_code).to eq(200)
    result = Helpers::Api.unwrap(data.data)
    expect(result.type).to eq('checkPayment')
    expect(result.id).to eq(payment.id)
    expect(result.attributes).not_to be_nil
  end
end
