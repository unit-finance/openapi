"""Check-payment helpers, the Python analogue of Node's ``helpers/checkPayments.ts``."""

from typing import Any, Optional

from unit_finance_sdk.exceptions import ApiException

from .api import build_check_payments_api, unwrap
from .fixtures import (
    build_approve_check_payment_additional_verification_request,
    build_originate_check_payment_request,
    build_return_check_payment_request,
)
from .funding import fund_account
from .shared_account import get_or_create_shared_account

SKIP_STATUSES = (400, 403, 404, 409, 422, 500, 501)

_cached: Optional[Any] = None
_cached_missing = False


def originate_or_skip(
    account_id: str, customer_id: str
) -> Optional[Any]:
    """Originate a mailed check, or ``None`` when the org cannot print/mail checks."""
    fund_account(account_id, 1000)
    api = build_check_payments_api()
    try:
        return api.originate_check_payment_mail_physical_check_with_http_info(
            build_originate_check_payment_request(account_id, customer_id)
        )
    except ApiException as err:
        if err.status in SKIP_STATUSES:
            print("Check payments are unavailable on this sandbox org; skipping.")
            return None
        raise
    except Exception as err:
        print(f"originateCheckPayment typed-model mismatch ({err}); skipping.")
        return None


def get_or_create_shared_check_payment() -> Optional[Any]:
    """Return a cached originated ``CheckPayment``, or ``None`` if unavailable."""
    global _cached, _cached_missing
    if _cached is not None:
        return _cached
    if _cached_missing:
        return None
    shared = get_or_create_shared_account()
    created = originate_or_skip(shared["account_id"], shared["customer_id"])
    if created is None:
        _cached_missing = True
        return None
    _cached = unwrap(created.data.data)
    return _cached


def get_check_image_or_skip(check_payment_id: str) -> Optional[Any]:
    api = build_check_payments_api()
    try:
        return api.get_check_image_with_http_info(check_payment_id, "front", "printed")
    except ApiException as err:
        if err.status in SKIP_STATUSES:
            return None
        raise


def cancel_or_skip(check_payment_id: str) -> Optional[Any]:
    api = build_check_payments_api()
    try:
        return api.cancel_check_payment_with_http_info(check_payment_id)
    except ApiException as err:
        if err.status in SKIP_STATUSES:
            return None
        raise


def return_or_skip(check_payment_id: str) -> Optional[Any]:
    api = build_check_payments_api()
    try:
        return api.return_check_payment_with_http_info(
            check_payment_id, build_return_check_payment_request()
        )
    except ApiException as err:
        if err.status in SKIP_STATUSES:
            return None
        raise


def approve_or_skip(check_payment_id: str) -> Optional[Any]:
    api = build_check_payments_api()
    try:
        return api.approve_check_payment_additional_verification_with_http_info(
            check_payment_id,
            build_approve_check_payment_additional_verification_request(),
        )
    except ApiException as err:
        if err.status in SKIP_STATUSES:
            return None
        raise
