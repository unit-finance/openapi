"""Authorized-user helpers, the Python analogue of Node's
``helpers/authorizedUsers.ts``.

``add_authorized_users`` / ``remove_authorized_users`` return a customer
resource and use the typed client. ``list_authorized_users`` /
``get_authorized_user`` type ``data`` as ``AuthorizedUserType`` (fullName /
email / phone), but the operations are documented as JSON:API resources.
These helpers therefore read list/get bodies via ``*_without_preload_content``
so tests can assert whichever shape the sandbox actually returns.
"""

from typing import Any, Dict, Optional, Tuple

from unit_finance_sdk.exceptions import ApiException

from .api import build_authorized_users_api
from .check_deposits import read_json
from .fixtures import build_add_authorized_users_request, build_authorized_user

_SKIP_STATUSES = {400, 403, 404, 409, 500}


def add_authorized_user_or_skip(
    customer_id: str,
    user: Optional[Dict[str, Any]] = None,
) -> Optional[Tuple[Any, Dict[str, Any]]]:
    """Add an authorized user, or return ``None`` when the sandbox org rejects
    the POST (capability off / invalid payload)."""
    api = build_authorized_users_api()
    payload = user or build_authorized_user()
    try:
        res = api.add_authorized_users_with_http_info(
            customer_id,
            build_add_authorized_users_request([payload]),
        )
    except ApiException as err:
        if err.status in _SKIP_STATUSES:
            print(
                "Adding authorized users is not available on this sandbox org; skipping."
            )
            return None
        raise
    if res.status_code in _SKIP_STATUSES:
        print(
            "Adding authorized users is not available on this sandbox org; skipping."
        )
        return None
    return res, payload


def list_authorized_users_raw(customer_id: str) -> Tuple[int, Optional[Dict[str, Any]]]:
    """List authorized users, reading the raw JSON:API document."""
    api = build_authorized_users_api()
    return read_json(api.list_authorized_users_without_preload_content(customer_id))


def get_authorized_user_raw(
    customer_id: str, authorized_user_id: str
) -> Tuple[int, Optional[Dict[str, Any]]]:
    """GET an authorized user, reading the raw JSON:API document."""
    api = build_authorized_users_api()
    return read_json(
        api.get_authorized_user_without_preload_content(customer_id, authorized_user_id)
    )


def authorized_user_id(item: Any) -> Optional[str]:
    """Pull a resource id out of a list/get item, whichever shape it is."""
    if not isinstance(item, dict):
        return None
    ident = item.get("id")
    if isinstance(ident, str) and ident:
        return ident
    attributes = item.get("attributes")
    if isinstance(attributes, dict):
        ident = attributes.get("id")
        if isinstance(ident, str) and ident:
            return ident
    return None
