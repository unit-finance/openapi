from helpers.api import build_accounts_api, requires_token, unwrap
from helpers.fixtures import build_close_deposit_account_request
from helpers.shared_account import create_dedicated_deposit_account


@requires_token
def test_reopen_account_reopens_a_closed_deposit_account():
    api = build_accounts_api()
    account = create_dedicated_deposit_account()

    closed = api.close_account_with_http_info(
        account["id"], build_close_deposit_account_request()
    )
    assert closed.status_code == 200

    res = api.reopen_account_with_http_info(account["id"])

    assert res.status_code == 200
    reopened = unwrap(res.data.data)
    assert reopened.id == account["id"]
    assert reopened.type == "depositAccount"
    assert reopened.attributes is not None
