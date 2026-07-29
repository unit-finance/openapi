from helpers.api import build_accounts_api, requires_token, unwrap
from helpers.shared_account import get_or_create_shared_deposit_account


@requires_token
def test_get_available_deposit_products_returns_products_for_an_account():
    api = build_accounts_api()
    shared = get_or_create_shared_deposit_account()

    res = api.get_available_deposit_products_with_http_info(shared["id"])

    assert res.status_code == 200
    assert isinstance(res.data.data, list)
    for item in res.data.data:
        product = unwrap(item)
        assert isinstance(product.type, str)
        assert product.attributes is not None
