from helpers.api import build_accounts_api, requires_token, unwrap
from helpers.fixtures import build_create_deposit_account_request
from helpers.shared_account import get_or_create_shared_account_context


@requires_token
def test_creates_a_deposit_account():
    ctx = get_or_create_shared_account_context()
    api = build_accounts_api()
    res = api.create_account_with_http_info(
        build_create_deposit_account_request(ctx["customer_id"])
    )

    assert res.status_code == 201
    data = unwrap(res.data.data)
    assert data.type == "depositAccount"
    assert isinstance(data.id, str)
    assert data.attributes is not None
