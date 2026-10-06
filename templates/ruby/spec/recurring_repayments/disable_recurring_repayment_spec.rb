require 'helpers/api'
require 'helpers/repayments'

RSpec.describe 'disable_recurring_repayment', :sandbox do
  it 'disables a recurring repayment' do
    # A dedicated schedule: `disable` flips its status, so sharing one with the
    # enable/read suites would make the run order-dependent.
    recurring = Helpers::Repayments.create_recurring_or_skip
    next if recurring.nil?

    api = Helpers::Api.build_recurring_repayments_api
    data, status_code, = api.disable_recurring_repayment_with_http_info(recurring.id, body: {})

    expect(status_code).to eq(200)
    disabled = Helpers::Api.unwrap(data.data)
    expect(disabled.id).to eq(recurring.id)
    expect(Helpers::Repayments::RECURRING_TYPES).to include(disabled.type)
    expect(disabled.attributes).not_to be_nil
  end
end
