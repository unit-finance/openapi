require 'helpers/api'
require 'helpers/counterparties'
require 'helpers/shared_account'

RSpec.describe 'list_counterparties', :sandbox do
  it 'returns a JSON:API list with page[limit] 20' do
    shared = Helpers::SharedAccount.get_or_create
    # Guarantee at least one counterparty exists, and scope the listing to this
    # run's customer: the org accumulates counterparties whose `bank` is null,
    # which the spec marks required and the strictly-typed Python/Java clients
    # reject while deserializing the page.
    Helpers::Counterparties.get_or_create
    api = Helpers::Api.build_counterparties_api

    data, status_code, = api.list_counterparties_with_http_info(
      page_limit: '20',
      filter_customer_id: shared[:customer_id]
    )

    expect(status_code).to eq(200)
    items = data.data
    expect(items).to be_an(Array)
    expect(items.length).to be <= 20
    items.each do |raw|
      item = Helpers::Api.unwrap(raw)
      expect(item.type).to eq('achCounterparty')
      expect(item.id).to be_a(String)
      expect(item.attributes).not_to be_nil
    end
  end
end
