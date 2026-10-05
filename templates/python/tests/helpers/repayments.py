"""Repayment helpers, the Python analogue of Node's ``helpers/repayments.ts``."""

from typing import Any, Optional

from unit_finance_sdk.exceptions import ApiException

from .api import build_recurring_repayments_api, build_repayments_api, unwrap
from .capabilities import error_body, is_capability_error
from .credit_accounts import get_credit_account_id
from .fixtures import (
    build_create_book_repayment_request,
    build_create_external_repayment_request,
    build_create_recurring_book_repayment_request,
)
from .shared_account import get_or_create_shared_account

# The JSON:API ``type`` values the repayment variants deserialize to.
REPAYMENT_TYPES = (
    "achRepayment",
    "bookRepayment",
    "capitalPartnerAchRepayment",
    "capitalPartnerBookRepayment",
    "externalRepayment",
)

# The JSON:API ``type`` values the recurring repayment variants deserialize to.
RECURRING_REPAYMENT_TYPES = (
    "recurringAchRepayment",
    "recurringBookRepayment",
    "recurringCapitalPartnerAchRepayment",
    "recurringCapitalPartnerBookRepayment",
)


def create_book_repayment_or_skip() -> Optional[Any]:
    """Create a book repayment, or ``None`` when repayments are unreachable on
    this org.

    Every repayment needs a ``creditAccount``, which needs a credit product on
    the org's bank agreement; see ``credit_accounts.py``. Repaying also requires
    a drawn balance on the credit account, which the sandbox will not always
    have, so a rejected repayment is treated as unavailable too.
    """
    credit_account_id = get_credit_account_id()
    if credit_account_id is None:
        return None

    shared = get_or_create_shared_account()
    try:
        res = build_repayments_api().create_repayment_with_http_info(
            build_create_book_repayment_request(
                shared["account_id"],
                credit_account_id,
                shared["counterparty_account_id"],
            )
        )
    except ApiException as err:
        if is_capability_error(err):
            print(
                "Repayments are not available on this sandbox org; skipping. "
                f"{error_body(err)}"
            )
            return None
        raise

    if res.status_code != 201:
        raise RuntimeError(
            f"Failed to create repayment: expected status 201, got {res.status_code}."
        )
    return unwrap(res.data.data)


def create_external_repayment_or_skip() -> Optional[str]:
    """An external repayment id for ``return_external_repayment`` to reverse.

    ``return`` is only valid for the external variant, so the id cannot come
    from the book repayment above.
    """
    credit_account_id = get_credit_account_id()
    if credit_account_id is None:
        return None

    try:
        res = build_repayments_api().create_repayment_with_http_info(
            build_create_external_repayment_request(credit_account_id)
        )
    except ApiException as err:
        if is_capability_error(err):
            print(
                "External repayments are not available on this sandbox org; "
                f"skipping. {error_body(err)}"
            )
            return None
        raise

    if res.status_code != 201:
        raise RuntimeError(
            f"Failed to create external repayment: expected status 201, "
            f"got {res.status_code}."
        )
    return unwrap(res.data.data).id


def get_repayment_id() -> Optional[str]:
    """A repayment id for the read suite. Prefers one this run created; falls
    back to an existing repayment so the read is still covered on an org that
    cannot create one.
    """
    created = create_book_repayment_or_skip()
    if created is not None:
        return created.id

    res = build_repayments_api().list_repayments_with_http_info(page_limit="1")
    for repayment in res.data.data or []:
        repayment_id = getattr(unwrap(repayment), "id", None)
        if isinstance(repayment_id, str):
            return repayment_id
    return None


def create_recurring_repayment_or_skip() -> Optional[Any]:
    """Create a recurring book repayment, or ``None`` when unreachable.

    Each caller mints its own: ``enable`` / ``disable`` flip the schedule's
    status, so a shared one would make the run order-dependent.
    """
    credit_account_id = get_credit_account_id()
    if credit_account_id is None:
        return None

    shared = get_or_create_shared_account()
    try:
        res = build_recurring_repayments_api().create_recurring_repayment_with_http_info(
            build_create_recurring_book_repayment_request(
                shared["account_id"],
                credit_account_id,
                shared["counterparty_account_id"],
            )
        )
    except ApiException as err:
        if is_capability_error(err):
            print(
                "Recurring repayments are not available on this sandbox org; "
                f"skipping. {error_body(err)}"
            )
            return None
        raise

    if res.status_code != 201:
        raise RuntimeError(
            f"Failed to create recurring repayment: expected status 201, "
            f"got {res.status_code}."
        )
    return unwrap(res.data.data)


def get_recurring_repayment_id() -> Optional[str]:
    """A recurring repayment id for the read suite, created or pre-existing."""
    created = create_recurring_repayment_or_skip()
    if created is not None:
        return created.id

    res = build_recurring_repayments_api().list_recurring_repayments_with_http_info(
        page_limit="1"
    )
    for recurring in res.data.data or []:
        recurring_id = getattr(unwrap(recurring), "id", None)
        if isinstance(recurring_id, str):
            return recurring_id
    return None
