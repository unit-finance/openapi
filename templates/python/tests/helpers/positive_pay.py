"""Positive Pay helpers, the Python analogue of Node's ``helpers/positivePay.ts``."""

from typing import Any

from .api import build_positive_pay_api, unwrap
from .fixtures import (
    build_create_check_payment_positive_pay_request,
    build_create_wire_drawdown_positive_pay_request,
)
from .shared_account import get_or_create_shared_account

# The JSON:API ``type`` values the three Positive Pay variants deserialize to.
POSITIVE_PAY_TYPES = (
    "checkPaymentPositivePay",
    "receivedAchDebitPositivePay",
    "drawdownPositivePay",
)


def _create_positive_pay_rule(request: Any) -> str:
    """Create a Positive Pay rule and return its id.

    Each caller mints its own rule rather than sharing one: ``cancel`` moves a
    rule to ``Cancelled`` and ``upload_positive_pay_document`` moves a drawdown
    rule from ``AwaitingDocuments`` to ``Active``, so a shared rule would make
    the run order-dependent.
    """
    res = build_positive_pay_api().create_positive_pay_with_http_info(request)
    # Raise rather than ``assert``: this runs in a helper, not a test body, so
    # an assertion would be attributed to the calling test misleadingly.
    if res.status_code != 201:
        raise RuntimeError(
            f"Failed to create Positive Pay rule: expected status 201, "
            f"got {res.status_code}."
        )
    return unwrap(res.data.data).id


def create_check_payment_positive_pay_id() -> str:
    """An ``Active`` check-payment rule for the get / cancel suites to read."""
    account_id = get_or_create_shared_account()["account_id"]
    return _create_positive_pay_rule(
        build_create_check_payment_positive_pay_request(account_id)
    )


def create_wire_drawdown_positive_pay_id() -> str:
    """A drawdown rule, created ``AwaitingDocuments``.

    That is the only state the document upload accepts.
    """
    account_id = get_or_create_shared_account()["account_id"]
    return _create_positive_pay_rule(
        build_create_wire_drawdown_positive_pay_request(account_id)
    )
