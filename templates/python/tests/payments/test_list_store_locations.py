import pytest

from helpers.api import build_payments_api, requires_token, unwrap


# TODO: Re-enable once the payment-related spec/docs fixes land. The store-
# location response fails to deserialize: StoreLocationAttributes.phone is
# modeled as a PhoneType object, but the sandbox returns a bare string. Blocked
# on an upstream spec fix (and the endpoint also now requires filter[serviceType]).
@pytest.mark.skip(
    reason="Blocked on upstream spec fix: StoreLocation.phone response model mismatch."
)
@requires_token
def test_lists_store_locations():
    api = build_payments_api()
    res = api.list_store_locations_with_http_info(
        filter_postal_code="11375",
        page_limit="20",
    )

    assert res.status_code == 200
    items = res.data.data
    assert isinstance(items, list)
    assert len(items) <= 20
    for raw in items:
        item = unwrap(raw)
        assert item.type == "storeLocation"
        assert isinstance(item.id, str)
        assert item.attributes is not None
