require 'helpers/api'
require 'helpers/positive_pay'

RSpec.describe 'cancel_positive_pay', :sandbox do
  it 'cancels a Positive Pay rule it created' do
    positive_pay_id = Helpers::PositivePay.create_check_payment_rule_id
    api = Helpers::Api.build_positive_pay_api

    # The spec declares the cancel body as an optional untyped `object`; the
    # sandbox accepts an empty one.
    data, status_code, = api.cancel_positive_pay_with_http_info(positive_pay_id, body: {})

    # The spec documents 200 for this operation, but the sandbox answers 201.
    # Tracked in SLICES.md as a spec defect owned by `unit-openapi`.
    expect(status_code).to eq(201)
    rule = Helpers::Api.unwrap(data.data)
    expect(rule.id).to eq(positive_pay_id)
    expect(rule.type).to eq('checkPaymentPositivePay')
    expect(rule.attributes.status).to be_a(String)
  end
end
