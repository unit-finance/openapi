from helpers.api import build_api, requires_token, unwrap
from helpers.fixtures import build_update_business_beneficial_owner_request
from helpers.shared_app import get_or_create_shared_business_app


@requires_token
def test_patches_a_beneficial_owner_of_the_shared_business_application():
    api = build_api()
    shared = get_or_create_shared_business_app()

    assert shared["beneficial_owner_id"], (
        "Business application is missing beneficialOwners.data[0].id"
    )

    res = api.update_business_beneficial_owner_with_http_info(
        shared["beneficial_owner_id"],
        build_update_business_beneficial_owner_request(shared["id"]),
    )

    assert res.status_code == 201
    data = unwrap(res.data.data)
    assert data.type == "beneficialOwner"
    assert data.id == shared["beneficial_owner_id"]
