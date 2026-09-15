"""Counterparty helpers, the Python analogue of Node's ``helpers/counterparties.ts``."""

from typing import Any, Optional

from unit_finance_sdk.exceptions import ApiException

from .api import build_counterparties_api, unwrap
from .fixtures import build_create_counterparty_request
from .shared_account import get_or_create_shared_account

_cached: Optional[Any] = None


def create_dedicated_counterparty() -> Any:
    """Create an ACH counterparty owned by the shared business customer."""
    shared = get_or_create_shared_account()
    api = build_counterparties_api()
    res = api.create_counterparty_with_http_info(
        build_create_counterparty_request(
            shared["customer_id"],
            shared["routing_number"],
            shared["account_number"],
        )
    )
    if res.status_code != 201:
        raise RuntimeError(
            f"Failed to create counterparty: expected status 201, "
            f"got {res.status_code}."
        )
    return unwrap(res.data.data)


def get_or_create_shared_counterparty() -> Any:
    """Return a cached counterparty for the read-only suites.

    ``update`` and ``delete`` provision their own so they never mutate or
    remove a resource another test depends on.
    """
    global _cached
    if _cached is None:
        _cached = create_dedicated_counterparty()
    return _cached


def get_counterparty_balance_or_skip(api: Any, counterparty_id: str) -> Optional[Any]:
    """Read a counterparty balance, or return ``None`` when the sandbox does not
    expose one for this counterparty.

    Balances are only tracked for counterparties linked through Plaid, so an
    account/routing-number counterparty answers with a validation error rather
    than a resource -- a property of the counterparty kind we can create here,
    not of the request.
    """
    try:
        return api.get_counterparty_balance_with_http_info(counterparty_id)
    except ApiException as err:
        if err.status in (400, 404):
            print(
                f"No balance available for counterparty {counterparty_id} "
                "(balances require a Plaid-linked counterparty); skipping."
            )
            return None
        raise
