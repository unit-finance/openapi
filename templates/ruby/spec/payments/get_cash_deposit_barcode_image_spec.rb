require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'get_cash_deposit_barcode_image', :sandbox do
  it 'returns the barcode image' do
    # TODO: unskip once the payments schemas are fixed. The prerequisite
    # list_store_locations call succeeds but its response fails to deserialize:
    # StoreLocationAttributes marks `phone` as required (non-nullable) while the
    # sandbox omits it, so the generated model raises during build_from_hash.
    skip 'blocked by non-nullable StoreLocationAttributes.phone in the spec'

    shared = Helpers::SharedAccount.get_or_create
    api = Helpers::Api.build_payments_api

    begin
      stores, = api.list_store_locations_with_http_info(
        filter_postal_code: Helpers::Fixtures::US_ADDRESS['postalCode'],
        filter_service_type: 'Barcode',
        page_limit: '1'
      )
    rescue UnitFinanceSdk::ApiError => e
      skip 'store-locations unavailable in sandbox (500)' if e.code == 500

      raise
    end

    skip 'no store locations near postal code in sandbox' if stores.data.empty?

    store_id = Helpers::Api.unwrap(stores.data.first).attributes.store_id
    created, create_status, = api.generate_cash_deposit_barcode_with_http_info(
      Helpers::Fixtures.generate_cash_deposit_barcode_request(
        store_id,
        shared[:customer_id],
        shared[:account_id]
      )
    )
    expect([200, 201]).to include(create_status)
    barcode_number = Helpers::Api.unwrap(created.data).attributes.barcode_number

    data, status_code, = api.get_cash_deposit_barcode_image_with_http_info(barcode_number)

    expect(status_code).to eq(200)
    expect(data).not_to be_nil
  end
end
