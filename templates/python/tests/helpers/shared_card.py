"""Shared cards, the Python analogue of Node's ``sharedCard.ts``.

Lazily provisions one Active virtual card that read-only Cards suites reuse,
plus factories for dedicated physical/virtual cards used by mutating suites.
"""

from typing import Any, Dict, Optional

from .api import build_cards_api, unwrap
from .fixtures import (
    build_create_business_debit_card_request,
    build_create_business_virtual_debit_card_request,
)
from .shared_account import get_or_create_shared_account

_cached: Optional[Dict[str, Any]] = None


def _create_card(virtual: bool) -> Dict[str, Any]:
    shared = get_or_create_shared_account()
    api = build_cards_api()
    request = (
        build_create_business_virtual_debit_card_request(shared["account_id"])
        if virtual
        else build_create_business_debit_card_request(shared["account_id"])
    )
    res = api.create_card_with_http_info(request)
    if res.status_code != 201:
        raise RuntimeError(
            f"Failed to create card: expected status 201, got {res.status_code}."
        )
    card = unwrap(res.data.data)
    return {"card_id": card.id, "type": card.type}


def get_or_create_shared_card() -> Dict[str, Any]:
    """Return a cached Active virtual card for read-only Cards suites."""
    global _cached
    if _cached is None:
        _cached = _create_card(virtual=True)
    return _cached


def create_dedicated_card() -> Dict[str, Any]:
    """Create an isolated physical debit card for state-mutating suites."""
    return _create_card(virtual=False)


def create_dedicated_virtual_card() -> Dict[str, Any]:
    """Create an isolated Active virtual card (report-lost/report-stolen)."""
    return _create_card(virtual=True)
