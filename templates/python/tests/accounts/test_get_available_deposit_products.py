from helpers.api import build_accounts_api, requires_token
from helpers.shared_account import get_or_create_shared_account_context


@requires_token
def test_returns_available_deposit_products_for_an_account():
    ctx = get_or_create_shared_account_context()
    api = build_accounts_api()
    res = api.get_available_deposit_products_with_http_info(ctx["account_id"])

    assert res.status_code == 200
    assert isinstance(res.data.data, list)
