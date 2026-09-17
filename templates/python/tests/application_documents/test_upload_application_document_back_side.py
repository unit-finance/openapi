from helpers.api import requires_token
from helpers.application_documents import (
    create_custom_document_or_skip,
    upload_back_or_skip,
)
from helpers.shared_app import get_or_create_shared_business_app


@requires_token
def test_uploads_an_application_document_back_side_file():
    shared = get_or_create_shared_business_app()

    document_id = create_custom_document_or_skip(shared["id"])
    if document_id is None:
        return

    result = upload_back_or_skip(shared["id"], document_id)
    if result is None:
        return

    status, document = result
    assert status == 200
    data = document["data"]
    assert data["id"] == document_id
    assert "attributes" in data
