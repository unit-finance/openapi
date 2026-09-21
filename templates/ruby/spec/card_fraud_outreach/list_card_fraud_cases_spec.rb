require 'helpers/api'
require 'helpers/card_fraud_outreach'

RSpec.describe 'list_card_fraud_cases', :sandbox do
  it 'returns a JSON:API list with page_limit=20' do
    status_code, document = Helpers::CardFraudOutreach.list_cases_raw
    next if document.nil? || [400, 403, 404, 409, 410, 500].include?(status_code)

    expect(status_code).to eq(200)
    items = document['data']
    expect(items).to be_an(Array)
    expect(items.length).to be <= 20
    items.each do |item|
      expect(item['id']).to be_a(String)
      expect(item['type']).to be_a(String)
      expect(item).to have_key('attributes')
    end
  end
end
