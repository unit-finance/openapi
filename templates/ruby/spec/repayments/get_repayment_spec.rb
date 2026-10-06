require 'helpers/api'
require 'helpers/repayments'

RSpec.describe 'get_repayment', :sandbox do
  it 'fetches a repayment by id' do
    repayment_id = Helpers::Repayments.id_or_skip
    next if repayment_id.nil?

    api = Helpers::Api.build_repayments_api
    data, status_code, = api.get_repayment_with_http_info(repayment_id)

    expect(status_code).to eq(200)
    repayment = Helpers::Api.unwrap(data.data)
    expect(repayment.id).to eq(repayment_id)
    expect(Helpers::Repayments::TYPES).to include(repayment.type)
    expect(repayment.attributes).not_to be_nil
  end
end
