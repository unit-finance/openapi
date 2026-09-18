from helpers.api import requires_token, unwrap
from helpers.authorized_users import add_authorized_user_or_skip
from helpers.customers import get_shared_business_customer_id


@requires_token
def test_add_authorized_users():
    customer_id = get_shared_business_customer_id()
    added = add_authorized_user_or_skip(customer_id)
    if added is None:
        return
    res, _user = added

    assert res.status_code in (200, 201)
    data = unwrap(res.data.data)
    assert data.id == customer_id
    assert isinstance(data.type, str)
