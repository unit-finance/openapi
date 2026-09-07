from helpers.api import build_accounts_api, requires_token, unwrap
from helpers.fixtures import build_update_deposit_account_request
from helpers.shared_account import get_or_create_shared_account


@requires_token
def test_updates_a_deposit_account():
    api = build_accounts_api()
    shared = get_or_create_shared_account()
    res = api.update_account_with_http_info(
        shared["account_id"],
        build_update_deposit_account_request(),
    )

    assert res.status_code in (200, 201)
    data = unwrap(res.data.data)
    assert data.id == shared["account_id"]
    assert data.type == "depositAccount"
