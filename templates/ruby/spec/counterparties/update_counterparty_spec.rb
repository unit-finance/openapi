require 'helpers/api'
require 'helpers/counterparties'
require 'helpers/fixtures'

RSpec.describe 'update_counterparty', :sandbox do
  it 'patches the tags of a dedicated counterparty' do
    counterparty = Helpers::Counterparties.create_dedicated
    api = Helpers::Api.build_counterparties_api

    data, status_code, = api.update_counterparty_with_http_info(
      counterparty.id,
      Helpers::Fixtures.update_counterparty_request
    )

    expect([200, 201]).to include(status_code)
    updated = Helpers::Api.unwrap(data.data)
    expect(updated.id).to eq(counterparty.id)
    expect(updated.type).to eq('achCounterparty')
    expect(updated.attributes).not_to be_nil
  end
end
