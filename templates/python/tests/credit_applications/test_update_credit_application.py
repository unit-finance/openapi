from helpers.api import build_credit_applications_api, requires_token
from helpers.credit import envelope_of, get_patchable_credit_application_id
from helpers.fixtures import build_update_credit_application_request


@requires_token
def test_updates_credit_application_underwriting_attributes():
    # A dedicated application: an approved decision would flip the shared one
    # to `Approved`, which the API refuses to PATCH.
    credit_application_id = get_patchable_credit_application_id()
    if credit_application_id is None:
        return

    api = build_credit_applications_api()
    res = api.update_credit_application_with_http_info(
        credit_application_id, build_update_credit_application_request()
    )

    assert res.status_code == 200
    envelope = envelope_of(res.data.data)
    assert envelope["id"] == credit_application_id
    assert envelope["type"] is not None
    assert envelope["attributes"] is not None
