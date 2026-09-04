from helpers.api import build_payments_api, requires_token, unwrap
from helpers.fixtures import build_create_recurring_book_payment_request
from helpers.shared_account import get_or_create_shared_account


@requires_token
def test_enables_a_recurring_payment():
    api = build_payments_api()
    shared = get_or_create_shared_account()
    created = api.create_recurring_payment_with_http_info(
        build_create_recurring_book_payment_request(
            shared["account_id"],
            shared["counterparty_account_id"],
        )
    )
    assert created.status_code == 201
    recurring_id = unwrap(created.data.data).id
    disabled = api.disable_recurring_payment_with_http_info(recurring_id)
    assert disabled.status_code == 200

    res = api.enable_recurring_payment_with_http_info(recurring_id)

    assert res.status_code == 200
    data = unwrap(res.data.data)
    assert data.id == recurring_id
    assert data.type == "recurringCreditBookPayment"
