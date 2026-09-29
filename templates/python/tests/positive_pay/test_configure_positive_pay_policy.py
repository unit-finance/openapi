import pytest

from helpers.api import build_positive_pay_api, requires_token
from helpers.fixtures import build_configure_positive_pay_policy_request
from helpers.shared_account import get_or_create_shared_account


# The sandbox does not route `POST /positive-pay-policy` at all. It answers
# every request — including a spec-valid one — with 404 "Please check the path,
# we don't serve any resource at the specified path", so the operation exists
# only in the spec.
@pytest.mark.skip(
    reason="Sandbox does not serve POST /positive-pay-policy (404 unknown path)."
)
@requires_token
def test_configures_a_positive_pay_policy():
    api = build_positive_pay_api()
    account_id = get_or_create_shared_account()["account_id"]

    res = api.configure_positive_pay_policy_with_http_info(
        build_configure_positive_pay_policy_request(account_id)
    )

    assert res.status_code in (200, 201)
