from helpers.api import build_accounts_api, requires_token, unwrap
from helpers.fixtures import build_add_account_owners_request
from helpers.shared_account import (
    create_individual_customer_id,
    create_individual_deposit_account,
)


@requires_token
def test_adds_account_owners():
    api = build_accounts_api()
    # Owners can only be added to an account whose existing owners are all
    # individuals; Unit rejects mixing a business owner with individuals.
    account = create_individual_deposit_account()
    owner_id = create_individual_customer_id()
    res = api.add_account_owners_with_http_info(
        account.id,
        build_add_account_owners_request([owner_id]),
    )

    assert res.status_code in (200, 201)
    data = unwrap(res.data.data)
    assert data.id == account.id
    assert data.type == "depositAccount"
