require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'reverse_fee', :sandbox do
  it 'reverses a fee on a deposit account' do
    api = Helpers::Api.build_fees_api
    account = Helpers::SharedAccount.get_or_create

    fee_data, fee_status, = api.create_fee_with_http_info(
      Helpers::Fixtures.create_fee_request(account[:id])
    )
    expect(fee_status).to eq(201)
    fee_id = Helpers::Api.unwrap(fee_data.data).id

    data, status_code, = api.reverse_fee_with_http_info(
      Helpers::Fixtures.reverse_fee_request(account[:id], fee_id)
    )

    expect(status_code).to eq(201)
    reversal = Helpers::Api.unwrap(data.data)
    expect(reversal.type).to eq('feeReversal')
    expect(reversal.id).to be_a(String)
    expect(reversal.attributes).not_to be_nil
    expect(reversal.attributes.description).not_to be_nil
  end
end
