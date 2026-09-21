require 'helpers/api'
require 'helpers/card_fraud_outreach'

RSpec.describe 'get_card_fraud_case_by_id', :sandbox do
  it 'returns a card fraud case by id' do
    status_code, document = Helpers::CardFraudOutreach.list_cases_raw
    next if document.nil? || [400, 403, 404, 409, 410, 500].include?(status_code)

    expect(status_code).to eq(200)
    items = document['data']
    skip 'no card fraud cases in sandbox' if items.nil? || items.empty?

    case_id = items.first['id']
    get_status, get_document = Helpers::CardFraudOutreach.get_case_raw(case_id)
    next if get_document.nil? || [400, 403, 404, 409, 410, 500].include?(get_status)

    expect(get_status).to eq(200)
    data = get_document['data']
    expect(data['id']).to eq(case_id)
    expect(data['type']).to be_a(String)
    expect(data).to have_key('attributes')
  end
end
