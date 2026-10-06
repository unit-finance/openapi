require 'helpers/api'
require 'helpers/repayments'

RSpec.describe 'get_recurring_repayment', :sandbox do
  it 'fetches a recurring repayment by id' do
    recurring_id = Helpers::Repayments.recurring_id_or_skip
    next if recurring_id.nil?

    api = Helpers::Api.build_recurring_repayments_api
    data, status_code, = api.get_recurring_repayment_with_http_info(recurring_id)

    expect(status_code).to eq(200)
    recurring = Helpers::Api.unwrap(data.data)
    expect(recurring.id).to eq(recurring_id)
    expect(Helpers::Repayments::RECURRING_TYPES).to include(recurring.type)
    expect(recurring.attributes).not_to be_nil
  end
end
