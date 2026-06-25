from helpers.api import build_api, requires_token, unwrap
from helpers.fixtures import build_update_business_application_request
from helpers.shared_app import get_or_create_shared_business_app


@requires_token
def test_patches_the_shared_business_application():
    api = build_api()
    shared = get_or_create_shared_business_app()

    res = api.update_application_with_http_info(
        shared["id"], build_update_business_application_request()
    )

    assert res.status_code in (200, 201)
    data = unwrap(res.data.data)
    assert data.id == shared["id"]
    assert data.type == "businessApplication"
    assert data.attributes is not None
