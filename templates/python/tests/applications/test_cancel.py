from helpers.api import build_api, requires_token, unwrap
from helpers.fixtures import build_cancelable_individual_application_request


@requires_token
def test_cancels_an_awaiting_documents_individual_application():
    api = build_api()

    # Cancel is only valid for applications in `PendingReview` or
    # `AwaitingDocuments`. Business applications auto-approve in the sandbox
    # (even with a magic officer SSN), so this suite creates an individual
    # applicant (SSN `000000003`) that lands in `AwaitingDocuments`.
    created = api.create_application_with_http_info(
        build_cancelable_individual_application_request()
    )
    assert created.status_code == 201
    app_id = unwrap(created.data.data).id

    res = api.cancel_application_with_http_info(
        app_id,
        {
            "data": {
                "type": "applicationCancel",
                "attributes": {"reason": "By user request via SDK integration test"},
            },
        },
    )

    assert res.status_code == 201
    data = unwrap(res.data.data)
    assert data.id == app_id
    assert data.attributes.status == "Canceled"
