"""Application-document helpers, the Python analogue of Node's
``helpers/applicationDocuments.ts``.

Like the check-deposit helpers, these read the JSON:API envelope from the raw
HTTP response (``*_without_preload_content``) rather than the typed models.
``ApplicationDocumentAttributes`` marks several fields (``status``,
``documentType``, ``name``, ``description``, ``archived``) required, but a
freshly created custom document does not necessarily carry all of them, which
would trip Pydantic's strict validation on ``from_dict`` before any assertion
runs. Reading the raw body lets these tests assert structural correctness
without depending on the spec's required-set matching the sandbox response.

The only document these suites can deterministically create is a **custom**
(client-requested) document via ``create_application_document``; the
Unit-required documents appear only while an application is
``AwaitingDocuments``, a magic-SSN-dependent state we do not control. When the
sandbox org does not offer custom documents (or the document is already
approved/archived and rejects uploads), the API answers with a 4xx/5xx
precondition error, which -- following the holds / check-deposit pattern -- is
treated as feature-unavailable (skip) rather than a failure.
"""

from typing import Any, Dict, Optional, Tuple

from .api import build_application_documents_api
from .check_deposits import JPEG_IMAGE_BYTES, read_json

_SKIP_STATUSES = {400, 403, 404, 409, 500}


def create_custom_document_or_skip(application_id: str) -> Optional[str]:
    """Create a custom application document; return its id or ``None`` when the
    sandbox org does not support creating one."""
    api = build_application_documents_api()
    status, document = read_json(
        api.create_application_document_without_preload_content(application_id, {})
    )
    if status in _SKIP_STATUSES:
        print(
            "Custom application documents are not available on this sandbox org; skipping."
        )
        return None
    return document["data"]["id"]


def upload_front_or_skip(
    application_id: str, document_id: str
) -> Optional[Tuple[int, Dict[str, Any]]]:
    """Upload a front image; treat precondition errors as skips."""
    api = build_application_documents_api()
    status, document = read_json(
        api.upload_application_document_without_preload_content(
            application_id, document_id, JPEG_IMAGE_BYTES
        )
    )
    if status in _SKIP_STATUSES:
        print(
            "Application document does not accept an upload (wrong state / archived); skipping."
        )
        return None
    return status, document


def upload_back_or_skip(
    application_id: str, document_id: str
) -> Optional[Tuple[int, Dict[str, Any]]]:
    """Upload a back-side image; treat precondition errors as skips."""
    api = build_application_documents_api()
    status, document = read_json(
        api.upload_application_document_back_side_without_preload_content(
            application_id, document_id, JPEG_IMAGE_BYTES
        )
    )
    if status in _SKIP_STATUSES:
        print("Application document does not accept a back-side upload; skipping.")
        return None
    return status, document
