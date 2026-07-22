from helpers.api import build_accounts_api, requires_token, unwrap
from helpers.shared_account import get_or_create_shared_deposit_account


@requires_token
def test_get_account_returns_the_deposit_account_by_id():
    api = build_accounts_api()
    shared = get_or_create_shared_deposit_account()

    res = api.get_account_with_http_info(shared["id"])

    assert res.status_code == 200
    account = unwrap(res.data.data)
    assert account.id == shared["id"]
    assert account.type == "depositAccount"
    assert account.attributes is not None
    assert account.attributes.routing_number is not None
    assert account.attributes.account_number is not None
