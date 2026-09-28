require 'helpers/api'
require 'helpers/receivables'

RSpec.describe 'get_total_accrued_interest', :sandbox do
  it 'totals accrued interest over a since/until window' do
    since_at, until_at = Helpers::Receivables.accrued_interest_window

    # The spec types `data` as a bare `{ amount }` object, but the sandbox
    # answers with a full JSON:API resource (`type`/`attributes.amount`), so
    # the generated model rejects the typed round-trip. Read the raw body.
    # Tracked in SLICES.md as a spec defect owned by `unit-openapi`.
    body, status_code = Helpers::Api.raw_get(
      '/accrued-interest/total',
      'filter[since]' => since_at, 'filter[until]' => until_at
    )

    expect(status_code).to eq(200)
    resource = body['data']
    expect(resource['type']).to eq('totalAccruedInterest')
    expect(resource['attributes']['amount']).to be_an(Integer)
  end
end
