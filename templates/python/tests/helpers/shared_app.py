"""Shared business application, the Python analogue of Node's ``sharedApp.ts``.

Lazily creates one Business application that downstream tests (get-by-id,
update, update-beneficial-owner) reuse. pytest runs in a single process, so
this module-level cache is shared across test files within a run.
"""

from typing import Any, Dict, Optional

from .api import build_api, unwrap
from .fixtures import build_business_application_request

_cached: Optional[Dict[str, Any]] = None


def get_or_create_shared_business_app() -> Dict[str, Any]:
    global _cached
    if _cached is not None:
        return _cached

    api = build_api()
    res = api.create_application_with_http_info(build_business_application_request())
    # Raise rather than `assert` here: this runs in a module-level helper, not a
    # test body, so an assertion would be attributed to whichever test first
    # calls this and produce a misleading report. A raised error surfaces the
    # real cause cleanly instead (mirrors Node's sharedApp.ts).
    if res.status_code != 201:
        raise RuntimeError(
            f"Failed to create shared business application: expected status 201, "
            f"got {res.status_code}."
        )

    created = unwrap(res.data.data)
    # Beneficial owners are not compound-included on the create response
    # (``included[]`` is empty); only their resource identifiers are exposed,
    # via the business application's ``beneficial_owners`` relationship. Read
    # the id from there.
    beneficial_owner_id: Optional[str] = None
    relationships = getattr(created, "relationships", None)
    beneficial_owners = getattr(relationships, "beneficial_owners", None)
    bo_data = getattr(beneficial_owners, "data", None)
    if bo_data:
        beneficial_owner_id = bo_data[0].id

    _cached = {
        "id": created.id,
        "type": created.type,
        "beneficial_owner_id": beneficial_owner_id,
    }
    return _cached
