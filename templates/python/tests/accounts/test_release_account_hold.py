from helpers.api import build_accounts_api, requires_token, unwrap
from helpers.fixtures import build_release_account_hold_request
from helpers.holds import create_account_hold_or_skip
from helpers.shared_account import get_or_create_shared_account


@requires_token
def test_releases_an_account_hold():
    api = build_accounts_api()
    shared = get_or_create_shared_account()
    created = create_account_hold_or_skip(api, shared["account_id"])
    if created is None:
        return
    assert created.status_code == 201
    hold_id = unwrap(created.data.data).id

    res = api.release_account_hold_with_http_info(
        hold_id,
        build_release_account_hold_request(),
    )

    assert res.status_code in (200, 201)
    data = unwrap(res.data.data)
    assert data.id == hold_id
    assert data.type == "accountHold"
