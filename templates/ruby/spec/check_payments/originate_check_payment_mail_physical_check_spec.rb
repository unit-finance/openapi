require 'helpers/api'
require 'helpers/check_payments'
require 'helpers/shared_account'

RSpec.describe 'originate_check_payment_mail_physical_check', :sandbox do
  it 'originates a mailed check payment on the shared account' do
    shared = Helpers::SharedAccount.get_or_create
    created = Helpers::CheckPayments.originate_or_skip(
      shared[:account_id],
      shared[:customer_id]
    )
    next if created.nil?

    data, status_code, = created
    expect(status_code).to eq(201)
    payment = Helpers::Api.unwrap(data.data)
    expect(payment.type).to eq('checkPayment')
    expect(payment.id).to be_a(String)
    expect(payment.attributes).not_to be_nil
    expect(payment.attributes.status).not_to be_nil
  end
end
