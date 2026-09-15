require 'helpers/api'
require 'helpers/counterparties'

RSpec.describe 'get_counterparty', :sandbox do
  it 'returns the counterparty by id' do
    counterparty = Helpers::Counterparties.get_or_create
    api = Helpers::Api.build_counterparties_api

    data, status_code, = api.get_counterparty_with_http_info(counterparty.id)

    expect(status_code).to eq(200)
    found = Helpers::Api.unwrap(data.data)
    expect(found.id).to eq(counterparty.id)
    expect(found.type).to eq('achCounterparty')
    expect(found.attributes).not_to be_nil
    expect(found.attributes.account_number).not_to be_nil
  end
end
