require 'helpers/api'
require 'helpers/positive_pay'

RSpec.describe 'get_positive_pay_by_id', :sandbox do
  it 'reads a single Positive Pay rule' do
    positive_pay_id = Helpers::PositivePay.create_check_payment_rule_id
    api = Helpers::Api.build_positive_pay_api

    data, status_code, = api.get_positive_pay_by_id_with_http_info(positive_pay_id)

    expect(status_code).to eq(200)
    rule = Helpers::Api.unwrap(data.data)
    expect(rule.id).to eq(positive_pay_id)
    expect(rule.type).to eq('checkPaymentPositivePay')
    expect(rule.attributes.status).to be_a(String)
  end
end
