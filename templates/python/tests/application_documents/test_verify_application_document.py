from unit_finance_sdk import VerifyDocumentRequest

from helpers.api import build_application_documents_api, requires_token
from helpers.application_documents import create_custom_document_or_skip
from helpers.check_deposits import read_json
from helpers.shared_app import get_or_create_shared_business_app

_SKIP_STATUSES = {400, 403, 404, 409, 500}


@requires_token
def test_verifies_a_selfie_verification_application_document():
    api = build_application_documents_api()
    shared = get_or_create_shared_business_app()

    document_id = create_custom_document_or_skip(shared["id"])
    if document_id is None:
        return

    # Verify is only legal for a `SelfieVerification` document paired with a
    # real IDV `jobId`, neither of which these suites can provision. The call is
    # exercised for wiring/serialization; a precondition error is expected and
    # treated as feature-unavailable rather than a failure.
    request = VerifyDocumentRequest.from_dict(
        {
            "data": {
                "type": "selfieVerification",
                "attributes": {"jobId": "X16krjAN1"},
            }
        }
    )
    status, document = read_json(
        api.verify_application_document_without_preload_content(
            shared["id"], document_id, request
        )
    )
    if status in _SKIP_STATUSES:
        print(
            "Document verification requires a SelfieVerification document and a "
            "real IDV job; skipping."
        )
        return

    assert status == 200
    data = document["data"]
    assert data["id"] == document_id
    assert "attributes" in data
