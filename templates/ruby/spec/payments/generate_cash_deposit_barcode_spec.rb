require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'generate_cash_deposit_barcode', :sandbox do
  it 'generates a cash deposit barcode' do
    shared = Helpers::SharedAccount.get_or_create
    api = Helpers::Api.build_payments_api

    data, status_code, = api.generate_cash_deposit_barcode_with_http_info(
      Helpers::Fixtures.generate_cash_deposit_barcode_request(shared[:account_id])
    )

    expect(status_code).to eq(201)
    barcode = Helpers::Api.unwrap(data.data)
    expect(barcode.id).to be_a(String)
    expect(barcode.type).to eq('cashDepositBarcode')
    expect(barcode.attributes).not_to be_nil
  end
end
