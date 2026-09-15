require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'create_counterparty', :sandbox do
  it 'creates an ACH counterparty for the shared customer' do
    shared = Helpers::SharedAccount.get_or_create
    api = Helpers::Api.build_counterparties_api

    data, status_code, = api.create_counterparty_with_http_info(
      Helpers::Fixtures.create_counterparty_request(
        shared[:customer_id],
        shared[:routing_number],
        shared[:account_number]
      )
    )

    expect(status_code).to eq(201)
    counterparty = Helpers::Api.unwrap(data.data)
    expect(counterparty.type).to eq('achCounterparty')
    expect(counterparty.id).to be_a(String)
    expect(counterparty.attributes).not_to be_nil
    expect(counterparty.attributes.routing_number).to eq(shared[:routing_number])
    expect(counterparty.attributes.permissions).not_to be_nil
  end
end
