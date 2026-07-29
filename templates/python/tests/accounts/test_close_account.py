from helpers.api import build_accounts_api, requires_token, unwrap
from helpers.fixtures import build_close_deposit_account_request
from helpers.shared_account import create_dedicated_deposit_account


@requires_token
def test_close_account_closes_a_dedicated_deposit_account():
    api = build_accounts_api()
    account = create_dedicated_deposit_account()

    res = api.close_account_with_http_info(
        account["id"], build_close_deposit_account_request()
    )

    assert res.status_code == 200
    closed = unwrap(res.data.data)
    assert closed.id == account["id"]
    assert closed.type == "depositAccount"
    assert closed.attributes is not None
    assert closed.attributes.status is not None
