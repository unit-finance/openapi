from helpers.api import build_accounts_api, requires_token, unwrap
from helpers.fixtures import build_create_account_hold_request
from helpers.shared_account import get_or_create_shared_deposit_account


@requires_token
def test_create_account_hold_creates_a_hold_on_a_deposit_account():
    api = build_accounts_api()
    shared = get_or_create_shared_deposit_account()

    res = api.create_account_hold_with_http_info(
        build_create_account_hold_request(shared["id"])
    )

    assert res.status_code == 201
    hold = unwrap(res.data.data)
    assert hold.type == "accountHold"
    assert isinstance(hold.id, str)
    assert hold.attributes is not None
    assert hold.attributes.amount is not None
    assert hold.attributes.description is not None
