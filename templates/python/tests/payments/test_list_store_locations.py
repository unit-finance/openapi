from helpers.api import build_payments_api, requires_token


@requires_token
def test_returns_store_locations_for_a_postal_code():
    api = build_payments_api()
    res = api.list_store_locations_with_http_info(filter_postal_code="11375")

    assert res.status_code == 200
    assert isinstance(res.data.data, list)
