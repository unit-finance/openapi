from helpers.api import build_accounts_api, requires_token, unwrap


@requires_token
def test_list_accounts_returns_a_json_api_list_with_page_limit_20():
    api = build_accounts_api()
    res = api.list_accounts_with_http_info(page_limit="20")

    assert res.status_code == 200
    assert isinstance(res.data.data, list)
    assert len(res.data.data) <= 20
    for item in res.data.data:
        account = unwrap(item)
        assert account.type in ("depositAccount", "creditAccount", "walletAccount")
        assert isinstance(account.id, str)
