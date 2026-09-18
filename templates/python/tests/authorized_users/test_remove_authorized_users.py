from helpers.api import build_authorized_users_api, requires_token, unwrap
from helpers.authorized_users import add_authorized_user_or_skip
from helpers.customers import get_shared_business_customer_id
from helpers.fixtures import build_remove_authorized_users_request


@requires_token
def test_remove_authorized_users():
    api = build_authorized_users_api()
    customer_id = get_shared_business_customer_id()
    added = add_authorized_user_or_skip(customer_id)
    if added is None:
        return
    _res, user = added

    res = api.remove_authorized_users_with_http_info(
        customer_id,
        build_remove_authorized_users_request([user["email"]]),
    )

    assert res.status_code in (200, 201)
    data = unwrap(res.data.data)
    assert data.id == customer_id
    assert isinstance(data.type, str)
