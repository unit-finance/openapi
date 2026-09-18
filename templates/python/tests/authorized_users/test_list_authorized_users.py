from helpers.api import requires_token
from helpers.authorized_users import add_authorized_user_or_skip, list_authorized_users_raw
from helpers.customers import get_shared_business_customer_id


@requires_token
def test_list_authorized_users():
    customer_id = get_shared_business_customer_id()
    add_authorized_user_or_skip(customer_id)

    status, document = list_authorized_users_raw(customer_id)

    assert status == 200
    items = document["data"]
    assert isinstance(items, list)
    for item in items:
        if "id" in item:
            assert isinstance(item["id"], str)
            assert isinstance(item["type"], str)
            assert "attributes" in item
        else:
            assert "fullName" in item
            assert isinstance(item["email"], str)
            assert "phone" in item
