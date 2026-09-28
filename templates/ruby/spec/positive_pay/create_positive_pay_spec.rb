require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'create_positive_pay', :sandbox do
  let(:account_id) { Helpers::SharedAccount.get_or_create[:account_id] }
  let(:api) { Helpers::Api.build_positive_pay_api }

  it 'creates a check-payment rule' do
    data, status_code, = api.create_positive_pay_with_http_info(
      Helpers::Fixtures.create_check_payment_positive_pay_request(account_id)
    )

    expect(status_code).to eq(201)
    rule = Helpers::Api.unwrap(data.data)
    expect(rule.type).to eq('checkPaymentPositivePay')
    expect(rule.id).to be_a(String)
    expect(rule.attributes).not_to be_nil
  end

  it 'creates a received-ACH-debit rule' do
    data, status_code, = api.create_positive_pay_with_http_info(
      Helpers::Fixtures.create_received_ach_debit_positive_pay_request(account_id)
    )

    expect(status_code).to eq(201)
    rule = Helpers::Api.unwrap(data.data)
    expect(rule.type).to eq('receivedAchDebitPositivePay')
    expect(rule.id).to be_a(String)
  end

  it 'creates a wire-drawdown rule' do
    data, status_code, = api.create_positive_pay_with_http_info(
      Helpers::Fixtures.create_wire_drawdown_positive_pay_request(account_id)
    )

    expect(status_code).to eq(201)
    rule = Helpers::Api.unwrap(data.data)
    expect(rule.type).to eq('drawdownPositivePay')
    expect(rule.id).to be_a(String)
  end
end
