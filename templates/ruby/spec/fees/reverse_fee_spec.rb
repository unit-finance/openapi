require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'reverse_fee', :sandbox do
  it 'reverses a fee' do
    shared = Helpers::SharedAccount.get_or_create
    fees_api = Helpers::Api.build_fees_api

    created, create_status, = fees_api.create_fee_with_http_info(
      Helpers::Fixtures.create_fee_request(shared[:account_id])
    )
    expect(create_status).to eq(201)
    fee_id = Helpers::Api.unwrap(created.data).id

    data, status_code, = fees_api.reverse_fee_with_http_info(
      Helpers::Fixtures.reverse_fee_request(fee_id)
    )

    expect(status_code).to eq(201)
    reversal = Helpers::Api.unwrap(data.data)
    expect(reversal.id).to be_a(String)
    expect(reversal.attributes).not_to be_nil
  end
end
