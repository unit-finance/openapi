import pytest

from helpers.api import build_accounts_api, requires_token, unwrap
from helpers.fixtures import (
    build_create_account_hold_request,
    build_release_account_hold_request,
)
from helpers.shared_account import get_or_create_shared_deposit_account


# SKIPPED: blocked by upstream unit-openapi spec bugs — creating the hold fails
# (data.type "createAccountHoldJson" vs required "accountHold"), and the release
# request's attributes schema omits the required idempotencyKey. Re-enable once
# the spec is fixed.
@pytest.mark.skip(reason="Blocked by unit-openapi spec bug: account-hold create/release")
@requires_token
def test_release_account_hold_releases_an_account_hold():
    api = build_accounts_api()
    shared = get_or_create_shared_deposit_account()

    created = api.create_account_hold_with_http_info(
        build_create_account_hold_request(shared["id"])
    )
    assert created.status_code == 201
    hold_id = unwrap(created.data.data).id

    res = api.release_account_hold_with_http_info(
        hold_id, build_release_account_hold_request()
    )

    assert res.status_code == 200
    hold = unwrap(res.data.data)
    assert hold.id == hold_id
    assert hold.type == "accountHold"
    assert hold.attributes is not None
    assert hold.attributes.status is not None
