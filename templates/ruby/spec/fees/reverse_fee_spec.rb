require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'reverse_fee', :sandbox do
  it 'reverses a fee' do
    ctx = Helpers::SharedAccount.get_or_create
    api = Helpers::Api.build_fees_api
    raw, created_status, = api.create_fee_with_http_info(
      Helpers::Fixtures.create_fee_request(ctx[:account_id]),
      debug_return_type: 'Object'
    )
    expect(created_status).to eq(201)

    fee_data = raw['data']
    account_id = fee_data.dig('relationships', 'account', 'data', 'id') || ctx[:account_id]
    transaction_id = fee_data.dig('relationships', 'transaction', 'data', 'id')
    expect(transaction_id).not_to be_nil

    data, status_code, = api.reverse_fee_with_http_info(
      Helpers::Fixtures.reverse_fee_request(account_id, transaction_id)
    )

    expect(status_code).to eq(201)
    reversal = Helpers::Api.unwrap(data.data)
    expect(reversal.type).to eq('feeReversal')
    expect(reversal.id).to be_a(String)
  end
end
