from helpers.api import build_payments_api, requires_token, unwrap


@requires_token
def test_returns_a_wire_drawdown_when_one_exists():
    api = build_payments_api()
    listed = api.list_wire_drawdowns_with_http_info(page_limit="1")
    assert listed.status_code == 200
    if not listed.data.data:
        return
    drawdown_id = listed.data.data[0].id

    res = api.get_wire_drawdown_with_http_info(drawdown_id)

    assert res.status_code == 200
    data = unwrap(res.data.data)
    assert data.id == drawdown_id
    assert data.type == "wireDrawdown"
