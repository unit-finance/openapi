from helpers.api import build_accounts_api, requires_token
from helpers.fixtures import build_verify_account_request
from helpers.shared_account import get_or_create_shared_deposit_account


@requires_token
def test_verify_account_verifies_a_routing_and_account_number_pair():
    api = build_accounts_api()
    shared = get_or_create_shared_deposit_account()

    res = api.verify_account_with_http_info(
        build_verify_account_request(
            shared["routing_number"], shared["account_number"]
        )
    )

    assert res.status_code == 200
    assert isinstance(res.data.data.exists, bool)
