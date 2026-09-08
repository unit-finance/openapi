require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_transaction'

RSpec.describe 'update_transaction_tags', :sandbox do
  it 'updates tags on a transaction' do
    shared = Helpers::SharedTransaction.get_or_create
    api = Helpers::Api.build_transactions_api

    data, status_code, = api.update_transaction_tags_with_http_info(
      shared[:account_id],
      shared[:transaction_id],
      Helpers::Fixtures.update_transaction_tags_request
    )

    expect(status_code).to eq(200)
    tx = Helpers::Api.unwrap(data.data)
    expect(tx.type).to be_a(String)
    expect(tx.id).to eq(shared[:transaction_id])
    expect(tx.attributes).not_to be_nil
  end
end
