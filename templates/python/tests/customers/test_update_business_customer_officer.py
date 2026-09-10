import pytest

from helpers.api import build_customers_api, requires_token, unwrap
from helpers.customers import get_shared_business_customer_officer_id
from helpers.fixtures import build_update_business_customer_officer_request


# Skipped: blocked on an upstream spec fix. Officer.attributes marks `status`
# required, but the sandbox omits it on the 200 response, so the strict Python
# model raises during deserialization (the PATCH itself succeeds). Node's axios
# client doesn't validate response fields, so its equivalent test still runs.
# Re-enable (remove the skip mark) once `status` is optional in the spec.
@pytest.mark.skip(
    reason="Blocked on upstream spec fix: Officer.attributes.status wrongly required; won't deserialize."
)
@requires_token
def test_updates_a_business_customer_officer():
    api = build_customers_api()
    customer_id, officer_id = get_shared_business_customer_officer_id()
    res = api.update_business_customer_officer_with_http_info(
        customer_id,
        officer_id,
        build_update_business_customer_officer_request(),
    )

    assert res.status_code in (200, 201)
    data = unwrap(res.data.data)
    assert data.type == "officer"
    assert data.attributes is not None
