require 'helpers/api'
require 'helpers/repayments'

RSpec.describe 'list_repayments', :sandbox do
  it 'returns a JSON:API list with page[limit]=20' do
    api = Helpers::Api.build_repayments_api

    data, status_code, = api.list_repayments_with_http_info(page_limit: '20')

    expect(status_code).to eq(200)
    repayments = Array(data.data)
    expect(repayments.length).to be <= 20
    repayments.each do |item|
      repayment = Helpers::Api.unwrap(item)
      expect(repayment.id).to be_a(String)
      expect(Helpers::Repayments::TYPES).to include(repayment.type)
      expect(repayment.attributes).not_to be_nil
    end
  end
end
