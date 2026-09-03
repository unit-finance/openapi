from helpers.api import build_accounts_api, requires_token, unwrap
from helpers.shared_account import get_or_create_shared_account_context


@requires_token
def test_returns_the_account_by_id():
    ctx = get_or_create_shared_account_context()
    api = build_accounts_api()
    res = api.get_account_with_http_info(ctx["account_id"])

    assert res.status_code == 200
    data = unwrap(res.data.data)
    assert data.id == ctx["account_id"]
    assert data.type == "depositAccount"
    assert data.attributes is not None
