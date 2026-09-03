require 'helpers/api'
require 'helpers/shared_account'

RSpec.describe 'get_available_deposit_products', :sandbox do
  it 'returns available deposit products for an account' do
    ctx = Helpers::SharedAccount.get_or_create
    api = Helpers::Api.build_accounts_api
    data, status_code, = api.get_available_deposit_products_with_http_info(ctx[:account_id])

    expect(status_code).to eq(200)
    expect(data.data).to be_an(Array)
  end
end
