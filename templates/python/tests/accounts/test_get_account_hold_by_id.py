from helpers.api import build_accounts_api, requires_token, unwrap
from helpers.fixtures import build_create_account_hold_request
from helpers.shared_account import get_or_create_shared_account


@requires_token
def test_gets_an_account_hold_by_id():
    api = build_accounts_api()
    shared = get_or_create_shared_account()
    created = api.create_account_hold_with_http_info(
        build_create_account_hold_request(shared["account_id"])
    )
    assert created.status_code == 201
    hold_id = unwrap(created.data.data).id

    res = api.get_account_hold_by_id_with_http_info(hold_id)

    assert res.status_code == 200
    data = unwrap(res.data.data)
    assert data.id == hold_id
    assert data.type == "accountHold"
