from helpers.api import build_customers_api, requires_token, unwrap
from helpers.customers import get_shared_business_customer_id
from helpers.fixtures import build_update_business_customer_request


@requires_token
def test_updates_a_business_customer():
    api = build_customers_api()
    customer_id = get_shared_business_customer_id()
    res = api.update_customer_with_http_info(
        customer_id,
        build_update_business_customer_request(),
    )

    assert res.status_code in (200, 201)
    data = unwrap(res.data.data)
    assert data.id == customer_id
    assert data.type == "businessCustomer"
