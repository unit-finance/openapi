require 'helpers/api'
require 'helpers/fixtures'

RSpec.describe 'reverse_fee', :sandbox do
  it 'reverses a previously created fee' do
    api = Helpers::Api.build_fees_api
    account_id = Helpers::Api.sandbox_deposit_account_id

    created, created_status, = api.create_fee_with_http_info(
      Helpers::Fixtures.create_fee_request(account_id)
    )
    expect(created_status).to eq(201)
    transaction_id = Helpers::Api.unwrap(created.data).id

    data, status_code, = api.reverse_fee_with_http_info(
      Helpers::Fixtures.reverse_fee_request(account_id, transaction_id)
    )

    expect(status_code).to eq(201)
    reversal = Helpers::Api.unwrap(data.data)
    expect(reversal.type).to eq('feeReversal')
    expect(reversal.id).to be_a(String)
    expect(reversal.attributes).not_to be_nil
    expect(reversal.attributes.description).not_to be_nil
  end
end
