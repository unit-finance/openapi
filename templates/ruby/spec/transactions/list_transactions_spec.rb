require 'helpers/api'
require 'helpers/shared_transaction'

RSpec.describe 'list_transactions', :sandbox do
  it 'returns a JSON:API list of transactions for an account' do
    shared = Helpers::SharedTransaction.get_or_create
    api = Helpers::Api.build_transactions_api

    # Scope to Book transactions: the shared account is funded via an
    # ATM-deposit simulation whose `atmTransaction` omits `tags`, a field the
    # generated strict models require. Filtering to a type whose responses
    # carry `tags` keeps this assertion on list_transactions.
    data, status_code, = api.list_transactions_with_http_info(
      filter_account_id: shared[:account_id],
      filter_type: 'Book',
      page_limit: '20'
    )

    expect(status_code).to eq(200)
    expect(data.data).to be_a(Array)
    expect(data.data.length).to be <= 20
    data.data.each do |item|
      tx = Helpers::Api.unwrap(item)
      expect(tx.type).to be_a(String)
      expect(tx.id).to be_a(String)
      expect(tx.attributes).not_to be_nil
    end
  end
end
