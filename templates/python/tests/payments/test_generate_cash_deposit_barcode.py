import pytest

from helpers.api import build_payments_api, requires_token, unwrap
from helpers.fixtures import build_generate_cash_deposit_barcode_request
from helpers.shared_account import get_or_create_shared_account


@requires_token
def test_generates_a_cash_deposit_barcode():
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
    store_id = store.attributes.store_id
    res = api.generate_cash_deposit_barcode_with_http_info(
        build_generate_cash_deposit_barcode_request(
            shared["account_id"],
            shared["customer_id"],
            store_id,
        )
    )

    assert res.status_code == 200
    data = unwrap(res.data.data)
    assert data.type == "cashDepositBarcode"
    assert isinstance(data.id, str)
