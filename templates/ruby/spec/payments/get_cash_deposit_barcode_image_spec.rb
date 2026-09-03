require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'get_cash_deposit_barcode_image', :sandbox do
  it 'returns a barcode image' do
    ctx = Helpers::SharedAccount.get_or_create
    api = Helpers::Api.build_payments_api
    stores, = api.list_store_locations_with_http_info(filter_postal_code: '11375')
    return if stores.data.empty?

    store_id = Helpers::Api.unwrap(stores.data.first).id
    barcode, barcode_status, = api.generate_cash_deposit_barcode_with_http_info(
      Helpers::Fixtures.cash_deposit_barcode_request(ctx[:customer_id], ctx[:account_id], store_id)
    )
    expect(barcode_status).to eq(201)
    barcode_number = Helpers::Api.unwrap(barcode.data).attributes.barcode_number

    _data, status_code, = api.get_cash_deposit_barcode_image_with_http_info(barcode_number)

    expect(status_code).to eq(200)
  end
end
