require 'helpers/api'
require 'helpers/repayments'

RSpec.describe 'list_recurring_repayments', :sandbox do
  it 'returns a JSON:API list with page[limit]=20' do
    api = Helpers::Api.build_recurring_repayments_api

    data, status_code, = api.list_recurring_repayments_with_http_info(page_limit: '20')

    expect(status_code).to eq(200)
    recurring_repayments = Array(data.data)
    expect(recurring_repayments.length).to be <= 20
    recurring_repayments.each do |item|
      recurring = Helpers::Api.unwrap(item)
      expect(recurring.id).to be_a(String)
      expect(Helpers::Repayments::RECURRING_TYPES).to include(recurring.type)
      expect(recurring.attributes).not_to be_nil
    end
  end
end
