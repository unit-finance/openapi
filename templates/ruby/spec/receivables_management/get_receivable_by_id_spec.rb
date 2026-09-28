require 'helpers/api'
require 'helpers/receivables'

RSpec.describe 'get_receivable_by_id', :sandbox do
  it 'reads a single receivable resource' do
    receivable_id = Helpers::Receivables.first_id_or_skip
    next if receivable_id.nil?

    # Read the raw body: the spec's `Receivable` requires `originalAmount` /
    # `remainingAmount`, which the sandbox replaces with `totalPrincipal` /
    # `remainingPrincipal`, so the typed round-trip raises. Tracked in
    # SLICES.md.
    body, status_code = Helpers::Api.raw_get("/receivables/#{receivable_id}")

    expect(status_code).to eq(200)
    receivable = body['data']
    expect(receivable['id']).to eq(receivable_id)
    expect(receivable['type']).to eq('bankReceivable')
    expect(receivable['attributes']['createdAt']).to be_a(String)
  end
end
