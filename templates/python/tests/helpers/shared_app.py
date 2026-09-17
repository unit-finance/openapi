"""Shared business application, the Python analogue of Node's ``sharedApp.ts``.

Lazily creates one Business application that downstream tests (get-by-id,
update, update-beneficial-owner) reuse. pytest runs in a single process, so
this module-level cache is shared across test files within a run.

The create response is read from the raw HTTP body (``*_without_preload_content``)
rather than the typed model. Since spec 0.10.0 the application create response
compound-includes ``ApplicationDocument`` resources in ``included[]``, but the
sandbox returns those documents with ``attributes.name`` (and other
spec-``required`` fields) set to ``null``. Pydantic's ``oneOf`` deserializer
then matches neither ``ApplicationDocument`` nor ``BeneficialOwner`` and raises
before any test runs. Node (axios) does not validate, so it is unaffected; this
is a spec defect owned by the ``unit-openapi`` repo. Reading the raw body lets
the shared fixture extract the ids it needs without tripping strict validation.
"""

import json
from typing import Any, Dict, Optional

from .api import build_api
from .fixtures import build_business_application_request

_cached: Optional[Dict[str, Any]] = None


def get_or_create_shared_business_app() -> Dict[str, Any]:
    global _cached
    if _cached is not None:
        return _cached

    api = build_api()
    response = api.create_application_without_preload_content(
        build_business_application_request()
    )
    status = response.status
    body = response.read()
    document = json.loads(body) if body else None
    # Raise rather than `assert` here: this runs in a module-level helper, not a
    # test body, so an assertion would be attributed to whichever test first
    # calls this and produce a misleading report. A raised error surfaces the
    # real cause cleanly instead (mirrors Node's sharedApp.ts).
    if status != 201:
        raise RuntimeError(
            f"Failed to create shared business application: expected status 201, "
            f"got {status}: {document}."
        )

    created = document["data"]
    # Beneficial owners are not compound-included on the create response
    # (``included[]`` carries application documents, not owners); only their
    # resource identifiers are exposed, via the business application's
    # ``beneficialOwners`` relationship. Read the id from there.
    beneficial_owner_id: Optional[str] = None
    relationships = created.get("relationships") or {}
    bo_data = (relationships.get("beneficialOwners") or {}).get("data")
    if bo_data:
        beneficial_owner_id = bo_data[0]["id"]

    _cached = {
        "id": created["id"],
        "type": created["type"],
        "beneficial_owner_id": beneficial_owner_id,
    }
    return _cached
