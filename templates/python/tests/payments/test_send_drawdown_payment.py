import pytest

from helpers.api import build_payments_api, requires_token, unwrap
from helpers.fixtures import build_send_drawdown_payment_request


@requires_token
def test_sends_a_drawdown_payment():
    api = build_payments_api()
    listed = api.list_wire_drawdowns_with_http_info(page_limit="1")
    assert listed.status_code == 200
    items = listed.data.data
    if not items:
        pytest.skip("No wire drawdowns in sandbox for sendDrawdownPayment test.")

    drawdown_id = unwrap(items[0]).id
    res = api.send_drawdown_payment_with_http_info(
        drawdown_id,
        build_send_drawdown_payment_request(),
    )

    assert res.status_code == 200
    data = unwrap(res.data.data)
    assert data.id == drawdown_id
    assert data.type == "wireDrawdown"
