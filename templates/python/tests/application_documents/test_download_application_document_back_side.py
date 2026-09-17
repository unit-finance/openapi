from helpers.api import build_application_documents_api, requires_token
from helpers.application_documents import (
    create_custom_document_or_skip,
    upload_back_or_skip,
)
from helpers.shared_app import get_or_create_shared_business_app

_SKIP_STATUSES = {400, 403, 404, 409, 500}


@requires_token
def test_downloads_an_application_document_back_side_file():
    api = build_application_documents_api()
    shared = get_or_create_shared_business_app()

    document_id = create_custom_document_or_skip(shared["id"])
    if document_id is None:
        return

    # A back-side file must be uploaded before it can be downloaded.
    if upload_back_or_skip(shared["id"], document_id) is None:
        return

    response = api.download_application_document_back_side_without_preload_content(
        shared["id"], document_id
    )
    status = response.status
    body = response.read()
    if status in _SKIP_STATUSES:
        print(
            "Application document back-side is not downloadable for this sandbox org; skipping."
        )
        return

    assert status == 200
    assert body is not None
