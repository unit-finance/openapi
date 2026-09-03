from helpers.api import build_payments_api, requires_token, unwrap
from helpers.fixtures import build_ach_debit_payment_request
from helpers.shared_account import get_or_create_shared_account_context


@requires_token
def test_cancels_a_pending_ach_debit_payment():
    ctx = get_or_create_shared_account_context()
    api = build_payments_api()
    created = api.create_payment_with_http_info(
        build_ach_debit_payment_request(ctx["account_id"])
    )
    assert created.status_code == 201
    payment_id = unwrap(created.data.data).id

    res = api.cancel_payment_with_http_info(payment_id)

    assert res.status_code == 200
    data = unwrap(res.data.data)
    assert data.id == payment_id
    assert data.type in ("achPayment", "wirePayment")
