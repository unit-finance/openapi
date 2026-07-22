from helpers.api import build_accounts_api, requires_token, unwrap
from helpers.fixtures import build_update_deposit_account_request
from helpers.shared_account import get_or_create_shared_deposit_account


@requires_token
def test_update_account_patches_the_shared_deposit_account():
    api = build_accounts_api()
    shared = get_or_create_shared_deposit_account()

    res = api.update_account_with_http_info(
        shared["id"], build_update_deposit_account_request()
    )

    assert res.status_code == 200
    account = unwrap(res.data.data)
    assert account.id == shared["id"]
    assert account.type == "depositAccount"
    assert account.attributes is not None
