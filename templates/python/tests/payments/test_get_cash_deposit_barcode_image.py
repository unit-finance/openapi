from helpers.api import build_payments_api, requires_token, unwrap
from helpers.fixtures import build_cash_deposit_barcode_request
from helpers.shared_account import get_or_create_shared_account_context


@requires_token
def test_returns_a_barcode_image():
    ctx = get_or_create_shared_account_context()
    api = build_payments_api()
    stores = api.list_store_locations_with_http_info(filter_postal_code="11375")
    if not stores.data.data:
        return
    store_id = stores.data.data[0].id
    barcode = api.generate_cash_deposit_barcode_with_http_info(
        build_cash_deposit_barcode_request(
            ctx["customer_id"],
            ctx["account_id"],
            store_id,
        )
    )
    assert barcode.status_code == 201
    barcode_number = unwrap(barcode.data.data).attributes.barcode_number

    res = api.get_cash_deposit_barcode_image_with_http_info(barcode_number)

    assert res.status_code == 200
