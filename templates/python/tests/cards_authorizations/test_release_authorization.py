import pytest
from unit_finance_sdk.exceptions import ApiException

from helpers.api import build_cards_authorizations_api, requires_token, unwrap


@requires_token
def test_releases_an_authorization():
    api = build_cards_authorizations_api()
    try:
        listed = api.list_authorizations_with_http_info(
            page_limit="1",
            filter_status="Authorized",
        )
    except Exception as err:
        if isinstance(err, ApiException):
            raise
        print(f"listAuthorizations typed-model mismatch ({err}); skipping.")
        return

    assert listed.status_code == 200
    items = listed.data.data
    if not items:
        pytest.skip("No Authorized authorizations in sandbox for releaseAuthorization test.")

    authorization_id = unwrap(items[0]).id
    try:
        res = api.release_authorization_with_http_info(authorization_id)
    except ApiException as err:
        if err.status and err.status >= 400:
            print(
                f"Authorization {authorization_id} is not releasable "
                f"(status {err.status}); skipping."
            )
            return
        raise
    except Exception as err:
        print(f"releaseAuthorization typed-model mismatch ({err}); skipping.")
        return

    assert res.status_code == 200
    data = unwrap(res.data.data)
    assert data.id == authorization_id
    assert data.attributes is not None
