require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'create_fee', :sandbox do
  it 'creates a fee on a deposit account' do
    api = Helpers::Api.build_fees_api
    account = Helpers::SharedAccount.get_or_create

    data, status_code, = api.create_fee_with_http_info(
      Helpers::Fixtures.create_fee_request(account[:id])
    )

    expect(status_code).to eq(201)
    fee = Helpers::Api.unwrap(data.data)
    expect(fee.type).to eq('fee')
    expect(fee.id).to be_a(String)
    expect(fee.attributes).not_to be_nil
    expect(fee.attributes.amount).not_to be_nil
    expect(fee.attributes.description).not_to be_nil
  end
end
