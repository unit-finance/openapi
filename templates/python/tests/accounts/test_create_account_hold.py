from helpers.api import build_accounts_api, requires_token, unwrap
from helpers.holds import create_account_hold_or_skip
from helpers.shared_account import get_or_create_shared_account


@requires_token
def test_creates_an_account_hold():
    api = build_accounts_api()
    shared = get_or_create_shared_account()
    res = create_account_hold_or_skip(api, shared["account_id"])
    if res is None:
        return

    assert res.status_code == 201
    data = unwrap(res.data.data)
    assert data.type == "accountHold"
    assert isinstance(data.id, str)
