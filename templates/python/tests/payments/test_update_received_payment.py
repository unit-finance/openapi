import pytest

from helpers.api import build_payments_api, requires_token, unwrap
from helpers.fixtures import build_update_received_payment_request
from helpers.shared_account import get_or_create_shared_account


@requires_token
def test_updates_a_received_payment():
    api = build_payments_api()
    shared = get_or_create_shared_account()
    listed = api.list_received_payments_with_http_info(
        filter_account_id=shared["account_id"],
        page_limit="1",
    )
    assert listed.status_code == 200
    items = listed.data.data
    if not items:
        pytest.skip("No received payments in sandbox for updateReceivedPayment test.")

    payment_id = unwrap(items[0]).id
    res = api.update_received_payment_with_http_info(
        payment_id,
        build_update_received_payment_request(),
    )

    assert res.status_code in (200, 201)
    data = unwrap(res.data.data)
    assert data.id == payment_id
    assert data.type in ("achReceivedPayment", "wireReceivedPayment")
