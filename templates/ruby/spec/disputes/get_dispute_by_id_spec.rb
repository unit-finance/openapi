require 'helpers/api'
require 'helpers/disputes'

RSpec.describe 'get_dispute_by_id', :sandbox do
  it 'reads a single dispute resource' do
    dispute_id = Helpers::Disputes.first_id_or_skip
    next if dispute_id.nil?

    api = Helpers::Api.build_disputes_api
    data, status_code, = api.get_dispute_by_id_with_http_info(dispute_id)

    expect(status_code).to eq(200)
    dispute = Helpers::Api.unwrap(data.data)
    expect(dispute.id).to eq(dispute_id)
    expect(dispute.type).to eq('dispute')
    expect(dispute.attributes.status).to be_a(String)
  end
end
