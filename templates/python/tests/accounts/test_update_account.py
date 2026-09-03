from helpers.api import build_accounts_api, requires_token, unwrap
from helpers.fixtures import build_update_deposit_account_request
from helpers.shared_account import get_or_create_shared_account_context


@requires_token
def test_updates_a_deposit_account():
    ctx = get_or_create_shared_account_context()
    api = build_accounts_api()
    res = api.update_account_with_http_info(
        ctx["account_id"],
        build_update_deposit_account_request(),
    )

    assert res.status_code == 200
    data = unwrap(res.data.data)
    assert data.id == ctx["account_id"]
    assert data.type == "depositAccount"
