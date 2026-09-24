"""Dispute lookup helpers, the Python analogue of Node's ``helpers/disputes.ts``."""

from typing import Optional

from .api import build_disputes_api


def get_first_dispute_id_or_skip() -> Optional[str]:
    """The id of an existing dispute, or ``None`` when the org has none.

    Disputes are opened by Unit operations, not through the API — this surface
    exposes only list and get — so ``get_dispute_by_id`` has nothing to read
    when the list comes back empty.
    """
    res = build_disputes_api().list_disputes_with_http_info(page_limit="1")
    items = res.data.data or []
    if not items:
        print(
            "No disputes exist on this sandbox org and the SDK has no "
            "create-dispute operation; skipping."
        )
        return None
    return items[0].id
