from helpers.api import build_payments_api, requires_token, unwrap
from helpers.fixtures import build_create_recurring_book_payment_request
from helpers.shared_account import get_or_create_shared_account


@requires_token
def test_creates_a_recurring_book_payment():
    api = build_payments_api()
    shared = get_or_create_shared_account()
    res = api.create_recurring_payment_with_http_info(
        build_create_recurring_book_payment_request(
            shared["account_id"],
            shared["counterparty_account_id"],
        )
    )

    assert res.status_code == 201
    data = unwrap(res.data.data)
    assert data.type == "recurringBookPayment"
    assert isinstance(data.id, str)
    assert data.attributes is not None
