require 'helpers/api'
require 'helpers/shared_transaction'

RSpec.describe 'get_transaction', :sandbox do
  it 'fetches a transaction by account and transaction id' do
    shared = Helpers::SharedTransaction.get_or_create
    api = Helpers::Api.build_transactions_api

    data, status_code, = api.get_transaction_with_http_info(
      shared[:account_id],
      shared[:transaction_id]
    )

    expect(status_code).to eq(200)
    tx = Helpers::Api.unwrap(data.data)
    expect(tx.type).to be_a(String)
    expect(tx.id).to eq(shared[:transaction_id])
    expect(tx.attributes).not_to be_nil
  end
end
