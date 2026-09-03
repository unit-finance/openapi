from helpers.api import build_payments_api, requires_token, unwrap
from helpers.fixtures import build_recurring_book_payment_request
from helpers.shared_account import get_or_create_shared_account_context


@requires_token
def test_creates_a_recurring_book_payment():
    ctx = get_or_create_shared_account_context()
    api = build_payments_api()
    res = api.create_recurring_payment_with_http_info(
        build_recurring_book_payment_request(
            ctx["account_id"],
            ctx["secondary_account_id"],
        )
    )

    assert res.status_code == 201
    data = unwrap(res.data.data)
    assert data.type == "recurringCreditBookPayment"
    assert isinstance(data.id, str)
