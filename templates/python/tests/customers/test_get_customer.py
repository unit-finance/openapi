from helpers.api import build_customers_api, requires_token, unwrap
from helpers.customers import get_shared_business_customer_id


@requires_token
def test_gets_a_customer_by_id():
    api = build_customers_api()
    customer_id = get_shared_business_customer_id()
    res = api.get_customer_with_http_info(customer_id)

    assert res.status_code == 200
    data = unwrap(res.data.data)
    assert data.id == customer_id
    assert data.type == "businessCustomer"
    assert data.attributes is not None
