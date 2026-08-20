from helpers.api import build_payments_api, requires_token, unwrap
from helpers.fixtures import build_create_ach_payment_request
from helpers.shared_account import get_or_create_shared_account


@requires_token
def test_cancels_an_ach_payment():
    api = build_payments_api()
    shared = get_or_create_shared_account()
    created = api.create_payment_with_http_info(
        build_create_ach_payment_request(shared["account_id"])
    )
    assert created.status_code == 201
    payment_id = unwrap(created.data.data).id

    res = api.cancel_payment_with_http_info(payment_id)

    assert res.status_code == 200
    data = unwrap(res.data.data)
    assert data.id == payment_id
    assert data.type == "achPayment"
