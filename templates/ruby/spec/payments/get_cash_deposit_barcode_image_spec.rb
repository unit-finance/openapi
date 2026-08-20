require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'get_cash_deposit_barcode_image', :sandbox do
  it 'returns the barcode image' do
    shared = Helpers::SharedAccount.get_or_create
    api = Helpers::Api.build_payments_api

    created, create_status, = api.generate_cash_deposit_barcode_with_http_info(
      Helpers::Fixtures.generate_cash_deposit_barcode_request(shared[:account_id])
    )
    expect(create_status).to eq(201)
    barcode_number = Helpers::Api.unwrap(created.data).attributes.barcode_number

    data, status_code, = api.get_cash_deposit_barcode_image_with_http_info(barcode_number)

    expect(status_code).to eq(200)
    expect(data).not_to be_nil
  end
end
