from helpers.api import build_accounts_api, requires_token


@requires_token
def test_returns_json_api_list_with_page_limit_20():
    api = build_accounts_api()
    res = api.list_account_holds_with_http_info(page_limit="20")

    assert res.status_code == 200
    assert isinstance(res.data.data, list)
    assert len(res.data.data) <= 20
