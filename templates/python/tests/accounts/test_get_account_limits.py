from helpers.api import build_accounts_api, requires_token
from helpers.shared_account import get_or_create_shared_deposit_account


@requires_token
def test_get_account_limits_returns_limits_for_a_deposit_account():
    api = build_accounts_api()
    shared = get_or_create_shared_deposit_account()

    res = api.get_account_limits_with_http_info(shared["id"])

    assert res.status_code == 200
    assert res.data.data is not None
    assert res.data.data.attributes is not None
