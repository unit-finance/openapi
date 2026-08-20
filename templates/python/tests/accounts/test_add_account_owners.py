from helpers.api import build_accounts_api, requires_token, unwrap
from helpers.fixtures import build_add_account_owners_request
from helpers.shared_account import (
    create_dedicated_deposit_account,
    get_or_create_individual_customer_id,
)


@requires_token
def test_adds_account_owners():
    api = build_accounts_api()
    account = create_dedicated_deposit_account()
    owner_id = get_or_create_individual_customer_id()
    res = api.add_account_owners_with_http_info(
        account.id,
        build_add_account_owners_request([owner_id]),
    )

    assert res.status_code == 200
    data = unwrap(res.data.data)
    assert data.id == account.id
    assert data.type == "depositAccount"
