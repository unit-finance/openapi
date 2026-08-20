from helpers.api import build_payments_api, requires_token, unwrap
from helpers.fixtures import build_create_batch_releases_request


@requires_token
def test_creates_batch_releases():
    api = build_payments_api()
    res = api.create_batch_releases_with_http_info(
        build_create_batch_releases_request()
    )

    assert res.status_code == 201
    items = res.data.data
    assert isinstance(items, list)
    assert len(items) >= 1
    data = unwrap(items[0])
    assert data.type == "batchRelease"
    assert isinstance(data.id, str)
