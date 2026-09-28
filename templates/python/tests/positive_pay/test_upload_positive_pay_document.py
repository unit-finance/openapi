import json

from helpers.api import build_positive_pay_api, requires_token
from helpers.positive_pay import create_wire_drawdown_positive_pay_id

# The smallest byte sequence the sandbox accepts as an ``application/pdf`` body.
MINIMAL_PDF = b"%PDF-1.4\n1 0 obj<</Type/Catalog>>endobj\ntrailer<</Root 1 0 R>>\n%%EOF\n"


@requires_token
def test_activates_a_drawdown_rule_by_uploading_its_document():
    api = build_positive_pay_api()
    # Only the drawdown variant is created ``AwaitingDocuments``; the other two
    # are already ``Active`` and answer this upload with 400.
    positive_pay_id = create_wire_drawdown_positive_pay_id()

    # The spec declares no response content for this operation, so the typed
    # method returns ``None``. The sandbox does return the activated rule;
    # read it raw. Tracked in SLICES.md.
    response = api.upload_positive_pay_document_without_preload_content(
        positive_pay_id,
        MINIMAL_PDF,
    )
    body = json.loads(response.read())

    assert response.status == 200
    assert body["data"]["id"] == positive_pay_id
    assert body["data"]["type"] == "drawdownPositivePay"
    assert body["data"]["attributes"] is not None
