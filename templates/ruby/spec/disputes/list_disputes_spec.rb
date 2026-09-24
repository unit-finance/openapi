require 'helpers/api'

RSpec.describe 'list_disputes', :sandbox do
  it 'returns a JSON:API list with page_limit=20' do
    api = Helpers::Api.build_disputes_api

    data, status_code, = api.list_disputes_with_http_info(page_limit: '20')

    expect(status_code).to eq(200)
    items = data.data
    expect(items).to be_an(Array)
    expect(items.length).to be <= 20
    items.each do |item|
      dispute = Helpers::Api.unwrap(item)
      expect(dispute.id).to be_a(String)
      expect(dispute.type).to eq('dispute')
      expect(dispute.attributes).not_to be_nil
    end
  end
end
