import pytest

from helpers.api import build_payments_api, requires_token, unwrap
from helpers.fixtures import build_create_batch_releases_request


# TODO: Re-enable once the payment-related spec/docs fixes land. The sandbox
# rejects the request with 400 "should be array" at /data, but the generated
# CreateBatchReleasesRequest models `data` as a single object, so the SDK
# cannot produce the array the API expects. Blocked on an upstream spec fix.
@pytest.mark.skip(
    reason="Blocked on upstream spec fix: batch-releases `data` should be an array."
)
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
