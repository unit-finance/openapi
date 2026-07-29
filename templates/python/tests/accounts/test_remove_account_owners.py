import pytest

from helpers.api import build_accounts_api, requires_token, unwrap
from helpers.fixtures import (
    build_add_account_owners_request,
    build_remove_account_owners_request,
)
from helpers.shared_account import (
    create_dedicated_deposit_account,
    get_or_create_shared_individual_customer_id,
)


# SKIPPED: blocked by an upstream unit-openapi spec bug — the generated body
# nests as data.attributes.data, but the API expects a top-level JSON:API array
# (data: [{ type: "customer", id }]). Re-enable once the spec is fixed.
@pytest.mark.skip(reason="Blocked by unit-openapi spec bug: account-owners body shape")
@requires_token
def test_remove_account_owners_removes_an_individual_customer_from_a_joint_account():
    api = build_accounts_api()
    account = create_dedicated_deposit_account()
    individual_customer_id = get_or_create_shared_individual_customer_id()

    added = api.add_account_owners_with_http_info(
        account["id"], build_add_account_owners_request(individual_customer_id)
    )
    assert added.status_code == 200

    res = api.remove_account_owners_with_http_info(
        account["id"], build_remove_account_owners_request(individual_customer_id)
    )

    assert res.status_code == 200
    updated = unwrap(res.data.data)
    assert updated.id == account["id"]
    assert updated.type == "depositAccount"
    assert updated.attributes is not None
