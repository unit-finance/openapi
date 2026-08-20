from helpers.api import build_payments_api, requires_token
from helpers.fixtures import build_get_expected_ach_completion_date_request
from helpers.shared_account import get_or_create_shared_account


@requires_token
def test_gets_expected_ach_completion_date():
    api = build_payments_api()
    shared = get_or_create_shared_account()
    res = api.get_expected_ach_completion_date_with_http_info(
        build_get_expected_ach_completion_date_request(shared["account_id"])
    )

    assert res.status_code == 200
    data = res.data.data
    assert data.attributes is not None
