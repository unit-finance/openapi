from helpers.api import build_accounts_api, requires_token, unwrap
from helpers.fixtures import (
    build_close_deposit_account_request,
    build_create_deposit_account_request,
)
from helpers.shared_account import get_or_create_shared_account_context


@requires_token
def test_reopens_a_closed_deposit_account():
    ctx = get_or_create_shared_account_context()
    api = build_accounts_api()
    created = api.create_account_with_http_info(
        build_create_deposit_account_request(ctx["customer_id"])
    )
    assert created.status_code == 201
    account_id = unwrap(created.data.data).id
    api.close_account_with_http_info(
        account_id,
        build_close_deposit_account_request(),
    )

    res = api.reopen_account_with_http_info(account_id)

    assert res.status_code == 200
    data = unwrap(res.data.data)
    assert data.id == account_id
    assert data.attributes.status == "Open"
