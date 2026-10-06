"""Stop-payment helpers, the Python analogue of Node's ``stopPayments.ts``."""

import json
import random
from typing import Any, Dict

from .api import build_stop_payments_api, unwrap
from .fixtures import (
    build_create_ach_stop_payment_request,
    build_create_check_stop_payment_request,
)
from .shared_account import get_or_create_shared_account

# The JSON:API ``type`` values stop payments deserialize to.
#
# The spec says the check variant is ``checkStopPayment``, but the sandbox
# answers create, get, disable and list with the bare ``stopPayment`` for it —
# only the ACH variant carries a discriminated ``achStopPayment``. Both
# spellings are accepted here so the suites keep passing when ``unit-openapi``
# reconciles the discriminator.
STOP_PAYMENT_TYPES = ("stopPayment", "checkStopPayment", "achStopPayment")

# What the sandbox actually returns for a check stop payment today.
CHECK_STOP_PAYMENT_TYPE = "stopPayment"


def _random_check_number() -> str:
    return str(random.randint(1000000, 9999999))


def create_check_stop_payment_raw() -> Dict[str, Any]:
    """Create a check stop payment and return the raw JSON:API body.

    The typed call cannot be used: every generated check-stop-payment model
    pins ``type`` to the spec's ``checkStopPayment`` enum, and pydantic rejects
    the ``stopPayment`` the sandbox actually sends. Reading the raw body is the
    same escape hatch the positive-pay cancel suite uses.
    """
    account_id = get_or_create_shared_account()["account_id"]
    response = build_stop_payments_api().create_stop_payment_without_preload_content(
        build_create_check_stop_payment_request(account_id, _random_check_number())
    )
    body = json.loads(response.read())
    # Raise rather than assert: this runs in a helper, not a test body, so a
    # failed assertion would be attributed to the calling test misleadingly.
    if response.status != 201:
        raise RuntimeError(
            f"Failed to create stop payment: expected status 201, got {response.status}."
        )
    return body["data"]


def create_check_stop_payment_id() -> str:
    """Each caller mints its own stop payment rather than sharing one:
    ``disable`` moves a stop payment to ``Disabled``, so a shared one would make
    the run order-dependent.
    """
    return create_check_stop_payment_raw()["id"]


def create_ach_stop_payment_id() -> str:
    """``update_ach_stop_payment`` only accepts the ACH variant, hence a
    separate helper. The ACH variant's ``type`` matches the spec, so this one
    can go through the typed client.
    """
    account_id = get_or_create_shared_account()["account_id"]
    res = build_stop_payments_api().create_stop_payment_with_http_info(
        build_create_ach_stop_payment_request(account_id)
    )
    if res.status_code != 201:
        raise RuntimeError(
            f"Failed to create ACH stop payment: expected status 201, "
            f"got {res.status_code}."
        )
    return unwrap(res.data.data).id
