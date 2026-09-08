require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_transaction'

RSpec.describe 'update_transaction', :sandbox do
  it "updates a book transaction's summary and tags" do
    shared = Helpers::SharedTransaction.get_or_create
    api = Helpers::Api.build_transactions_api

    data, status_code, = api.update_transaction_with_http_info(
      shared[:transaction_id],
      Helpers::Fixtures.update_book_transaction_request(shared[:account_id])
    )

    expect(status_code).to eq(200)
    tx = Helpers::Api.unwrap(data.data)
    expect(tx.type).to be_a(String)
    expect(tx.id).to eq(shared[:transaction_id])
    expect(tx.attributes).not_to be_nil
  end
end
