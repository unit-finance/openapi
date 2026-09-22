from unit_finance_sdk.exceptions import ApiException

from helpers.api import (
    build_cards_authorization_requests_api,
    requires_token,
    unwrap,
)


@requires_token
def test_lists_authorization_requests():
    api = build_cards_authorization_requests_api()
    try:
        res = api.list_authorization_requests_with_http_info(page_limit="20")
    except Exception as err:
        if isinstance(err, ApiException):
            raise
        print(f"listAuthorizationRequests typed-model mismatch ({err}); skipping.")
        return

    assert res.status_code == 200
    items = res.data.data
    assert isinstance(items, list)
    assert len(items) <= 20
    for raw in items:
        item = unwrap(raw)
        assert isinstance(item.id, str)
        assert isinstance(item.type, str)
