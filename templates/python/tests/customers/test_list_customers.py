from helpers.api import build_customers_api, requires_token, unwrap


@requires_token
def test_lists_customers_with_page_limit():
    api = build_customers_api()
    res = api.list_customers_with_http_info(page_limit="20")

    assert res.status_code == 200
    items = res.data.data
    assert isinstance(items, list)
    assert len(items) <= 20
    for raw in items:
        item = unwrap(raw)
        assert item.type in ("businessCustomer", "individualCustomer")
        assert isinstance(item.id, str)
