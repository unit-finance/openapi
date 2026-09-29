"""Receivables helpers, the Python analogue of Node's ``helpers/receivables.ts``."""

import json
from datetime import datetime, timedelta, timezone
from typing import Any, Dict, List, Optional, Tuple

from .api import build_receivables_management_api


def list_receivables_raw(page_limit: str = "20") -> Dict[str, Any]:
    """``GET /receivables`` as the raw JSON body.

    The typed call cannot complete: the spec marks ``Receivable.attributes``
    ``originalAmount`` / ``remainingAmount`` required, but the sandbox returns
    ``totalPrincipal`` / ``remainingPrincipal`` instead, so pydantic matches
    neither arm of the response ``oneOf`` and raises before any assertion runs.
    Node (axios) does not validate and is unaffected. Spec defect owned by
    ``unit-openapi``; tracked in SLICES.md.
    """
    response = (
        build_receivables_management_api().list_receivables_without_preload_content(
            page_limit=page_limit
        )
    )
    body = json.loads(response.read())
    return {"status": response.status, "body": body}


def receivable_items(body: Dict[str, Any]) -> List[Dict[str, Any]]:
    """The receivable array out of a list body.

    ``data`` is a ``oneOf`` of a receivable array and a single balance
    resource; only the array form carries ids.
    """
    data = body.get("data")
    return data if isinstance(data, list) else []


def get_first_receivable_id_or_skip() -> Optional[str]:
    """The id of an existing receivable, or ``None`` when the org has none.

    Receivables are produced by Unit's lending flows, not through the API —
    this surface exposes only list and get — so ``get_receivable_by_id`` has
    nothing to read when the list comes back empty.
    """
    items = receivable_items(list_receivables_raw(page_limit="1")["body"])
    if not items:
        print(
            "No receivables exist on this sandbox org and the SDK has no "
            "create-receivable operation; skipping."
        )
        return None
    return items[0]["id"]


def accrued_interest_window() -> Tuple[str, str]:
    """A one-day ``(since, until)`` window as full ISO-8601 instants.

    ``GET /accrued-interest/total`` rejects a missing range with 400 and
    rejects plain ``YYYY-MM-DD`` dates with 400 ``Invalid value``, so the
    filters must be datetimes. The window is kept to a single day because
    wider ranges make the sandbox hang past any sensible client timeout.
    """
    until = datetime.now(timezone.utc)
    since = until - timedelta(days=1)
    fmt = "%Y-%m-%dT%H:%M:%S.%f"
    return (
        f"{since.strftime(fmt)[:-3]}Z",
        f"{until.strftime(fmt)[:-3]}Z",
    )
