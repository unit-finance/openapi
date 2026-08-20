from helpers.api import build_payments_api, requires_token, unwrap
from helpers.fixtures import (
    build_create_book_payment_request,
    build_update_book_payment_request,
)
from helpers.shared_account import get_or_create_shared_account


@requires_token
def test_updates_a_book_payment():
    api = build_payments_api()
    shared = get_or_create_shared_account()
    created = api.create_payment_with_http_info(
        build_create_book_payment_request(
            shared["account_id"],
            shared["counterparty_account_id"],
        )
    )
    assert created.status_code == 201
    payment_id = unwrap(created.data.data).id

    res = api.update_payment_with_http_info(
        payment_id,
        build_update_book_payment_request(),
    )

    assert res.status_code in (200, 201)
    data = unwrap(res.data.data)
    assert data.id == payment_id
    assert data.type == "bookPayment"
