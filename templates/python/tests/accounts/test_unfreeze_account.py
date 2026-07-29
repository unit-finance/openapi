from helpers.api import build_accounts_api, requires_token, unwrap
from helpers.fixtures import build_freeze_deposit_account_request
from helpers.shared_account import create_dedicated_deposit_account


@requires_token
def test_unfreeze_account_unfreezes_a_frozen_deposit_account():
    api = build_accounts_api()
    account = create_dedicated_deposit_account()

    frozen = api.freeze_account_with_http_info(
        account["id"], build_freeze_deposit_account_request()
    )
    assert frozen.status_code == 200

    res = api.unfreeze_account_with_http_info(account["id"])

    assert res.status_code == 200
    unfrozen = unwrap(res.data.data)
    assert unfrozen.id == account["id"]
    assert unfrozen.type == "depositAccount"
    assert unfrozen.attributes is not None
