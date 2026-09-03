from helpers.api import build_payments_api, requires_token, unwrap
from helpers.fixtures import build_bulk_payment_request
from helpers.shared_account import get_or_create_shared_account_context


@requires_token
def test_accepts_a_bulk_book_payment_request():
    ctx = get_or_create_shared_account_context()
    api = build_payments_api()
    res = api.create_bulk_payment_with_http_info(
        build_bulk_payment_request(ctx["account_id"], ctx["secondary_account_id"])
    )

    assert res.status_code == 201
    data = unwrap(res.data.data)
    assert data.type == "bulkPayment"
    assert isinstance(data.id, str)
