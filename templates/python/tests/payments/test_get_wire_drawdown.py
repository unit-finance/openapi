import pytest

from helpers.api import build_payments_api, requires_token, unwrap


@requires_token
def test_gets_a_wire_drawdown_by_id():
    api = build_payments_api()
    listed = api.list_wire_drawdowns_with_http_info(page_limit="1")
    assert listed.status_code == 200
    items = listed.data.data
    if not items:
        pytest.skip("No wire drawdowns in sandbox for getWireDrawdown test.")

    drawdown_id = unwrap(items[0]).id
    res = api.get_wire_drawdown_with_http_info(drawdown_id)

    assert res.status_code == 200
    data = unwrap(res.data.data)
    assert data.id == drawdown_id
    assert data.type == "wireDrawdown"
