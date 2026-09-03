from helpers.api import build_payments_api, requires_token, unwrap
from helpers.fixtures import build_cash_deposit_barcode_request
from helpers.shared_account import get_or_create_shared_account_context


@requires_token
def test_generates_a_cash_deposit_barcode():
    ctx = get_or_create_shared_account_context()
    api = build_payments_api()
    stores = api.list_store_locations_with_http_info(filter_postal_code="11375")
    assert stores.status_code == 200
    if not stores.data.data:
        return
    store_id = stores.data.data[0].id

    res = api.generate_cash_deposit_barcode_with_http_info(
        build_cash_deposit_barcode_request(
            ctx["customer_id"],
            ctx["account_id"],
            store_id,
        )
    )

    assert res.status_code == 201
    data = unwrap(res.data.data)
    assert data.type == "cashDepositBarcode"
    assert data.attributes.barcode_number is not None
