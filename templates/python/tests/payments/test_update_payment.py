from helpers.api import build_payments_api, requires_token, unwrap
from helpers.fixtures import (
    build_book_payment_request,
    build_update_book_payment_request,
)
from helpers.shared_account import get_or_create_shared_account_context


@requires_token
def test_updates_a_book_payment():
    ctx = get_or_create_shared_account_context()
    api = build_payments_api()
    created = api.create_payment_with_http_info(
        build_book_payment_request(ctx["account_id"], ctx["secondary_account_id"])
    )
    assert created.status_code == 201
    payment_id = unwrap(created.data.data).id

    res = api.update_payment_with_http_info(
        payment_id,
        build_update_book_payment_request(),
    )

    assert res.status_code == 200
    data = unwrap(res.data.data)
    assert data.id == payment_id
    assert data.type == "bookPayment"
