from helpers.api import build_accounts_api, requires_token, unwrap


@requires_token
def test_lists_accounts_with_page_limit():
    api = build_accounts_api()
    res = api.list_accounts_with_http_info(page_limit="20")

    assert res.status_code == 200
    items = res.data.data
    assert isinstance(items, list)
    assert len(items) <= 20
    for raw in items:
        item = unwrap(raw)
        assert item.type in ("depositAccount", "creditAccount", "walletAccount")
        assert isinstance(item.id, str)
