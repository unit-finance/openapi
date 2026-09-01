import pytest

from helpers.api import build_payments_api, requires_token, unwrap
from helpers.fixtures import build_generate_cash_deposit_barcode_request
from helpers.shared_account import get_or_create_shared_account


# TODO: Re-enable once the payment-related spec/docs fixes land. Listing store
# locations fails to deserialize: StoreLocationAttributes.phone is modeled as a
# PhoneType object, but the sandbox returns a bare string. Blocked on an
# upstream spec fix to the store-location response model.
@pytest.mark.skip(
    reason="Blocked on upstream spec fix: StoreLocation.phone response model mismatch."
)
@requires_token
def test_gets_a_cash_deposit_barcode_image():
    api = build_payments_api()
    shared = get_or_create_shared_account()
    stores = api.list_store_locations_with_http_info(
        filter_postal_code="11375",
        filter_service_type="Barcode",
        page_limit="1",
    )
    assert stores.status_code == 200
    if not stores.data.data:
        pytest.skip("No barcode store locations in sandbox.")

    store = unwrap(stores.data.data[0])
    generated = api.generate_cash_deposit_barcode_with_http_info(
        build_generate_cash_deposit_barcode_request(
            shared["account_id"],
            shared["customer_id"],
            store.attributes.store_id,
        )
    )
    assert generated.status_code == 200
    barcode = unwrap(generated.data.data)
    barcode_number = barcode.attributes.barcode_number

    res = api.get_cash_deposit_barcode_image_with_http_info(barcode_number)

    assert res.status_code == 200
    assert isinstance(res.data, (bytes, bytearray))
    assert len(res.data) > 0
