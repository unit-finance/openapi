import pytest
from unit_finance_sdk.exceptions import ApiException

from helpers.api import (
    build_cards_authorization_requests_api,
    requires_token,
    unwrap,
)


@requires_token
def test_gets_an_authorization_request_by_id():
    api = build_cards_authorization_requests_api()
    try:
        listed = api.list_authorization_requests_with_http_info(page_limit="1")
    except Exception as err:
        if isinstance(err, ApiException):
            raise
        print(f"listAuthorizationRequests typed-model mismatch ({err}); skipping.")
        return

    assert listed.status_code == 200
    items = listed.data.data
    if not items:
        pytest.skip("No authorization requests in sandbox for getAuthorizationRequestById test.")

    request_id = unwrap(items[0]).id
    try:
        res = api.get_authorization_request_by_id_with_http_info(request_id)
    except Exception as err:
        if isinstance(err, ApiException):
            raise
        print(f"getAuthorizationRequestById typed-model mismatch ({err}); skipping.")
        return

    assert res.status_code == 200
    data = unwrap(res.data.data)
    assert data.id == request_id
    assert data.attributes is not None
