require 'helpers/api'
require 'helpers/credit'

RSpec.describe 'list_credit_applications', :sandbox do
  it 'returns a JSON:API list with page_limit=20' do
    status_code, document = Helpers::Credit.list_credit_applications_raw
    next if document.nil? || Helpers::Credit::SKIP_STATUSES.include?(status_code)

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
