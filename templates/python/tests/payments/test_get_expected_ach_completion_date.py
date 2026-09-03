from helpers.api import build_payments_api, requires_token, unwrap
from helpers.fixtures import build_expected_ach_completion_date_request
from helpers.shared_account import get_or_create_shared_account_context


@requires_token
def test_returns_an_expected_ach_completion_date():
    ctx = get_or_create_shared_account_context()
    api = build_payments_api()
    res = api.get_expected_ach_completion_date_with_http_info(
        build_expected_ach_completion_date_request(ctx["account_id"])
    )

    assert res.status_code == 201
    data = unwrap(res.data.data)
    assert data.type == "achExpectedCompletionDate"
    assert data.attributes is not None
