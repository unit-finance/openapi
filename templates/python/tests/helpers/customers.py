"""Shared customer helpers for the Customers suites.

The shared business application auto-approves in the sandbox, provisioning a
business customer that ``get_customer``, ``update_customer`` and the
officer-update suite reuse. Its id is exposed via the shared account helper.
"""

from typing import Tuple

from .api import build_customers_api, unwrap
from .shared_account import get_or_create_shared_account


def get_shared_business_customer_id() -> str:
    return get_or_create_shared_account()["customer_id"]


def get_shared_business_customer_officer_id() -> Tuple[str, str]:
    """Return ``(customer_id, officer_id)`` for the shared business customer."""
    customer_id = get_shared_business_customer_id()
    api = build_customers_api()
    res = api.get_customer_with_http_info(customer_id)
    customer = unwrap(res.data.data)
    relationships = getattr(customer, "relationships", None)
    officer = getattr(relationships, "officer", None)
    officer_data = unwrap(getattr(officer, "data", None))
    if officer_data is None or not officer_data.id:
        raise RuntimeError(
            f"No officer relationship on business customer {customer_id}.",
        )
    return customer_id, officer_data.id
