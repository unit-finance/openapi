from helpers.api import build_accounts_api, requires_token, unwrap
from helpers.fixtures import build_close_deposit_account_request
from helpers.shared_account import create_dedicated_deposit_account


@requires_token
def test_closes_a_deposit_account():
    api = build_accounts_api()
    account = create_dedicated_deposit_account()
    res = api.close_account_with_http_info(
        account.id,
        build_close_deposit_account_request(),
    )

    assert res.status_code in (200, 201)
    data = unwrap(res.data.data)
    assert data.id == account.id
    assert data.type == "depositAccount"
