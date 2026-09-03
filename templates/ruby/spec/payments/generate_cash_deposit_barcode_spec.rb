require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'generate_cash_deposit_barcode', :sandbox do
  it 'generates a cash deposit barcode' do
    ctx = Helpers::SharedAccount.get_or_create
    api = Helpers::Api.build_payments_api
    stores, stores_status, = api.list_store_locations_with_http_info(filter_postal_code: '11375')
    expect(stores_status).to eq(200)
    return if stores.data.empty?

    store_id = Helpers::Api.unwrap(stores.data.first).id
    data, status_code, = api.generate_cash_deposit_barcode_with_http_info(
      Helpers::Fixtures.cash_deposit_barcode_request(ctx[:customer_id], ctx[:account_id], store_id)
    )

    expect(status_code).to eq(201)
    barcode = Helpers::Api.unwrap(data.data)
    expect(barcode.type).to eq('cashDepositBarcode')
    expect(barcode.attributes.barcode_number).not_to be_nil
  end
end
