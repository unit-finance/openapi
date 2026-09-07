from helpers.api import build_payments_api, requires_token, unwrap


@requires_token
def test_lists_wire_drawdowns():
    api = build_payments_api()
    res = api.list_wire_drawdowns_with_http_info(page_limit="20")

    assert res.status_code == 200
    items = res.data.data
    assert isinstance(items, list)
    assert len(items) <= 20
    for raw in items:
        item = unwrap(raw)
        assert item.type == "wireDrawdown"
        assert isinstance(item.id, str)
