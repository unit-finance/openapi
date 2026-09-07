from helpers.api import build_accounts_api, requires_token, unwrap
from helpers.shared_account import get_or_create_shared_account


@requires_token
def test_gets_an_account_by_id():
    api = build_accounts_api()
    shared = get_or_create_shared_account()
    res = api.get_account_with_http_info(shared["account_id"])

    assert res.status_code == 200
    data = unwrap(res.data.data)
    assert data.id == shared["account_id"]
    assert data.type == "depositAccount"
    assert data.attributes is not None
