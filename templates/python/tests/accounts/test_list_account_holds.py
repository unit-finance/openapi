from helpers.api import build_accounts_api, requires_token, unwrap


@requires_token
def test_lists_account_holds():
    api = build_accounts_api()
    # The account-id filter was removed from the spec; list holds org-wide.
    res = api.list_account_holds_with_http_info(
        page_limit="20",
    )

    assert res.status_code == 200
    items = res.data.data
    assert isinstance(items, list)
    assert len(items) <= 20
    for raw in items:
        item = unwrap(raw)
        assert item.type == "accountHold"
        assert isinstance(item.id, str)
