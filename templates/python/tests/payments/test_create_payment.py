from helpers.api import build_payments_api, requires_token, unwrap
from helpers.fixtures import build_book_payment_request
from helpers.shared_account import get_or_create_shared_account_context


@requires_token
def test_creates_a_book_payment():
    ctx = get_or_create_shared_account_context()
    api = build_payments_api()
    res = api.create_payment_with_http_info(
        build_book_payment_request(ctx["account_id"], ctx["secondary_account_id"])
    )

    assert res.status_code == 201
    data = unwrap(res.data.data)
    assert data.type == "bookPayment"
    assert isinstance(data.id, str)
    assert data.attributes is not None
