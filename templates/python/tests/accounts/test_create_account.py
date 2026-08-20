from helpers.api import build_accounts_api, requires_token, unwrap
from helpers.fixtures import build_create_deposit_account_request
from helpers.shared_account import get_or_create_shared_account


@requires_token
def test_creates_a_deposit_account():
    api = build_accounts_api()
    shared = get_or_create_shared_account()
    res = api.create_account_with_http_info(
        build_create_deposit_account_request(shared["customer_id"])
    )

    assert res.status_code == 201
    data = unwrap(res.data.data)
    assert data.type == "depositAccount"
    assert isinstance(data.id, str)
    assert data.attributes is not None
