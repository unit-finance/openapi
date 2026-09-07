from helpers.api import build_accounts_api, requires_token
from helpers.shared_account import get_or_create_shared_account


@requires_token
def test_gets_available_deposit_products():
    api = build_accounts_api()
    shared = get_or_create_shared_account()
    res = api.get_available_deposit_products_with_http_info(shared["account_id"])

    assert res.status_code == 200
    items = res.data.data
    assert isinstance(items, list)
    for item in items:
        assert item.attributes is not None
