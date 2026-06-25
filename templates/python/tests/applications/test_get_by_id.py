from helpers.api import build_api, requires_token, unwrap
from helpers.shared_app import get_or_create_shared_business_app


@requires_token
def test_returns_the_application_by_id():
    api = build_api()
    shared = get_or_create_shared_business_app()

    res = api.get_by_id_with_http_info(shared["id"])

    assert res.status_code == 200
    data = unwrap(res.data.data)
    assert data.id == shared["id"]
    assert data.type == shared["type"]
    assert data.attributes is not None
