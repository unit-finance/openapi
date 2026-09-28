require 'helpers/api'
require 'helpers/positive_pay'

RSpec.describe 'list_positive_pay', :sandbox do
  it 'returns a JSON:API list with page_limit=20' do
    api = Helpers::Api.build_positive_pay_api

    data, status_code, = api.list_positive_pay_with_http_info(page_limit: '20')

    expect(status_code).to eq(200)
    items = data.data
    expect(items).to be_an(Array)
    expect(items.length).to be <= 20
    items.each do |item|
      rule = Helpers::Api.unwrap(item)
      expect(rule.id).to be_a(String)
      expect(Helpers::PositivePay::TYPES).to include(rule.type)
      expect(rule.attributes).not_to be_nil
    end
  end
end
