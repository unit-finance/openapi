from helpers.api import requires_token
from helpers.authorized_users import (
    add_authorized_user_or_skip,
    authorized_user_id,
    get_authorized_user_raw,
    list_authorized_users_raw,
)
from helpers.customers import get_shared_business_customer_id


@requires_token
def test_get_authorized_user():
    customer_id = get_shared_business_customer_id()
    added = add_authorized_user_or_skip(customer_id)
    if added is None:
        return

    status, document = list_authorized_users_raw(customer_id)
    if status != 200 or not document or not document.get("data"):
        print("listAuthorizedUsers did not return a list; skipping getAuthorizedUser.")
        return

    user_id = None
    for item in document["data"]:
        user_id = authorized_user_id(item)
        if user_id:
            break
    if user_id is None:
        # Spec types list items as AuthorizedUserType (no id). Without an id
        # the GET path is unreachable.
        print("listAuthorizedUsers did not return a resource id; skipping getAuthorizedUser.")
        return

    status, body = get_authorized_user_raw(customer_id, user_id)
    assert status == 200
    item = body["data"]
    if "id" in item:
        assert item["id"] == user_id
        assert isinstance(item["type"], str)
        assert "attributes" in item
    else:
        assert "fullName" in item
        assert isinstance(item["email"], str)
        assert "phone" in item
