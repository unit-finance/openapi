from helpers.api import build_accounts_api, requires_token, unwrap
from helpers.fixtures import build_freeze_deposit_account_request
from helpers.shared_account import create_dedicated_deposit_account


@requires_token
def test_freeze_account_freezes_a_dedicated_deposit_account():
    api = build_accounts_api()
    account = create_dedicated_deposit_account()

    res = api.freeze_account_with_http_info(
        account["id"], build_freeze_deposit_account_request()
    )

    assert res.status_code == 200
    frozen = unwrap(res.data.data)
    assert frozen.id == account["id"]
    assert frozen.type == "depositAccount"
    assert frozen.attributes is not None
    assert frozen.attributes.status is not None
