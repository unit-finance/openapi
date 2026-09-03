require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'create_bulk_payment', :sandbox do
  it 'accepts a bulk book payment request' do
    ctx = Helpers::SharedAccount.get_or_create
    api = Helpers::Api.build_payments_api
    data, status_code, = api.create_bulk_payment_with_http_info(
      Helpers::Fixtures.bulk_payment_request(ctx[:account_id], ctx[:secondary_account_id])
    )

    expect(status_code).to eq(201)
    bulk = Helpers::Api.unwrap(data.data)
    expect(bulk.type).to eq('bulkPayment')
    expect(bulk.id).to be_a(String)
  end
end
