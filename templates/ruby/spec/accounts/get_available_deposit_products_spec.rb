require 'helpers/api'
require 'helpers/shared_account'

RSpec.describe 'get_available_deposit_products', :sandbox do
  it 'returns deposit products for the shared account' do
    shared = Helpers::SharedAccount.get_or_create
    api = Helpers::Api.build_accounts_api

    data, status_code, = api.get_available_deposit_products_with_http_info(shared[:account_id])

    expect(status_code).to eq(200)
    expect(data.data).not_to be_nil
  end
end
