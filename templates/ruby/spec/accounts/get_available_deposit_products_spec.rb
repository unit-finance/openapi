require 'helpers/api'
require 'helpers/shared_account'

RSpec.describe 'get_available_deposit_products', :sandbox do
  it 'returns available deposit products for an account' do
    api = Helpers::Api.build_accounts_api
    shared = Helpers::SharedAccount.get_or_create

    data, status_code, = api.get_available_deposit_products_with_http_info(shared[:id])

    expect(status_code).to eq(200)
    expect(data.data).to be_an(Array)
    data.data.each do |item|
      product = Helpers::Api.unwrap(item)
      expect(product.type).to be_a(String)
      expect(product.attributes).not_to be_nil
    end
  end
end
