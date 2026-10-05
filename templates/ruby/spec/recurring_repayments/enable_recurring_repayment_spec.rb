require 'helpers/api'
require 'helpers/repayments'

RSpec.describe 'enable_recurring_repayment', :sandbox do
  it 're-enables a disabled recurring repayment' do
    recurring = Helpers::Repayments.create_recurring_or_skip
    next if recurring.nil?

    # A recurring repayment is created `Active`, and `enable` is only valid
    # from `Disabled`, so this example disables its own schedule first rather
    # than sharing one with the disable suite.
    api = Helpers::Api.build_recurring_repayments_api
    api.disable_recurring_repayment_with_http_info(recurring.id, body: {})

    data, status_code, = api.enable_recurring_repayment_with_http_info(recurring.id, body: {})

    expect(status_code).to eq(200)
    enabled = Helpers::Api.unwrap(data.data)
    expect(enabled.id).to eq(recurring.id)
    expect(Helpers::Repayments::RECURRING_TYPES).to include(enabled.type)
    expect(enabled.attributes).not_to be_nil
  end
end
