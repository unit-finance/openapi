from helpers.api import build_accounts_api, requires_token
from helpers.shared_account import get_or_create_shared_account


@requires_token
def test_gets_account_limits():
    api = build_accounts_api()
    shared = get_or_create_shared_account()
    res = api.get_account_limits_with_http_info(shared["account_id"])

    assert res.status_code == 200
    data = res.data.data
    assert data.attributes is not None
