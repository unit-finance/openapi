import pytest

from helpers.api import build_payments_api, requires_token, unwrap
from helpers.shared_account import get_or_create_shared_account


@requires_token
def test_gets_a_received_payment_by_id():
    api = build_payments_api()
    shared = get_or_create_shared_account()
    listed = api.list_received_payments_with_http_info(
        filter_account_id=shared["account_id"],
        page_limit="1",
    )
    assert listed.status_code == 200
    items = listed.data.data
    if not items:
        pytest.skip("No received payments in sandbox for getReceivedPayment test.")

    payment_id = unwrap(items[0]).id
    res = api.get_received_payment_with_http_info(payment_id)

    assert res.status_code == 200
    data = unwrap(res.data.data)
    assert data.id == payment_id
    assert data.type in ("achReceivedPayment", "wireReceivedPayment")
