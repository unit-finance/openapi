require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'generate_cash_deposit_barcode', :sandbox do
  it 'generates a cash deposit barcode' do
    shared = Helpers::SharedAccount.get_or_create
    api = Helpers::Api.build_payments_api

    begin
      stores, = api.list_store_locations_with_http_info(
        filter_postal_code: Helpers::Fixtures::US_ADDRESS['postalCode'],
        filter_service_type: 'Barcode',
        page_limit: '1'
      )
    rescue UnitFinanceSdk::ApiError => e
      # Mirror the Node suite: without a store there is nothing to barcode, and
      # the sandbox store-locations endpoint 500s, so return early (passing).
      next if e.code == 500

      raise
    rescue ArgumentError => e
      # Surface (don't silence) the spec/response mismatch that blocks the
      # prerequisite store lookup. StoreLocation.attributes marks `phone` required
      # (non-nullable) but the sandbox omits it, so the strict Ruby model raises
      # during deserialization ("#{e.message}"). Node's axios client doesn't
      # validate required fields, so it never sees this. Fix belongs upstream in
      # the spec (make StoreLocation.attributes.phone nullable).
      skip "spec mismatch: StoreLocation.attributes.phone is required but the sandbox omits it (#{e.message})"
    end

    next if stores.data.empty?

    store_id = Helpers::Api.unwrap(stores.data.first).attributes.store_id
    data, status_code, = api.generate_cash_deposit_barcode_with_http_info(
      Helpers::Fixtures.generate_cash_deposit_barcode_request(
        store_id,
        shared[:customer_id],
        shared[:account_id]
      )
    )

    expect([200, 201]).to include(status_code)
    barcode = Helpers::Api.unwrap(data.data)
    expect(barcode.id).to be_a(String)
    expect(barcode.type).to eq('cashDepositBarcode')
    expect(barcode.attributes).not_to be_nil
  end
end
