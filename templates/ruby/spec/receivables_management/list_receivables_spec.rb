require 'helpers/api'
require 'helpers/receivables'

RSpec.describe 'list_receivables', :sandbox do
  it 'returns a JSON:API list with page_limit=20' do
    # Read the raw body: the spec's `Receivable` requires attribute keys the
    # sandbox does not send, so the typed call raises. See
    # `Helpers::Receivables.list_raw`.
    body, status_code = Helpers::Receivables.list_raw('20')

    expect(status_code).to eq(200)
    items = Helpers::Receivables.items(body)
    expect(items).to be_an(Array)
    expect(items.length).to be <= 20
    items.each do |receivable|
      expect(receivable['id']).to be_a(String)
      expect(receivable['type']).to eq('bankReceivable')
      expect(receivable['attributes']).not_to be_nil
    end
  end
end
