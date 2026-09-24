from helpers.api import (
    VND_API_JSON_HEADERS,
    build_credit_applications_api,
    requires_token,
)
from helpers.credit import envelope_of, get_credit_application_id


@requires_token
def test_gets_credit_application_by_id():
    credit_application_id = get_credit_application_id()
    if credit_application_id is None:
        return

    api = build_credit_applications_api()
    res = api.get_credit_application_with_http_info(
        credit_application_id, _headers=VND_API_JSON_HEADERS
    )

    assert res.status_code == 200
    envelope = envelope_of(res.data.data)
    assert envelope["id"] == credit_application_id
    assert envelope["type"] is not None
    assert envelope["attributes"] is not None
