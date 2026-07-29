from helpers.api import build_accounts_api, build_applications_api, requires_token, unwrap
from helpers.fixtures import (
    build_business_application_request,
    build_create_deposit_account_request,
)


@requires_token
def test_create_account_creates_a_deposit_account_for_an_approved_business_customer():
    apps_api = build_applications_api()
    accounts_api = build_accounts_api()

    created = apps_api.create_application_with_http_info(
        build_business_application_request()
    )
    assert created.status_code == 201

    app_id = unwrap(created.data.data).id
    app = unwrap(apps_api.get_by_id(app_id).data)
    # customer.data is a polymorphic RelationshipData oneOf wrapper; unwrap it
    # before reading the id.
    customer_id = unwrap(app.relationships.customer.data).id
    assert customer_id is not None

    res = accounts_api.create_account_with_http_info(
        build_create_deposit_account_request(customer_id)
    )

    assert res.status_code == 201
    account = unwrap(res.data.data)
    assert account.type == "depositAccount"
    assert isinstance(account.id, str)
    assert account.attributes is not None
    assert account.attributes.deposit_product is not None
    assert account.attributes.status is not None
