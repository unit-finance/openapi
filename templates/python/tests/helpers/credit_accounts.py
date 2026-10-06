"""Credit-account helpers, the Python analogue of Node's ``creditAccounts.ts``."""

from typing import Optional

from unit_finance_sdk.exceptions import ApiException

from .api import build_accounts_api, unwrap
from .capabilities import error_body, is_capability_error
from .fixtures import build_create_credit_account_request
from .shared_account import get_or_create_shared_account

# ``creditTerms`` names a credit product configured on the org, and there is no
# API to enumerate them. ``credit_terms_1`` is the identifier Unit's own docs
# use for the sandbox default; an org without it answers the create with 4xx,
# which the caller treats as feature-unavailable.
SANDBOX_CREDIT_TERMS = "credit_terms_1"

_cached_id: Optional[str] = None
_resolved = False


def _find_existing_credit_account_id() -> Optional[str]:
    res = build_accounts_api().list_accounts_with_http_info(page_limit="100")
    for account in res.data.data or []:
        resource = unwrap(account)
        account_id = getattr(resource, "id", None)
        if getattr(resource, "type", None) == "creditAccount" and isinstance(
            account_id, str
        ):
            return account_id
    return None


def get_credit_account_id() -> Optional[str]:
    """A credit account id for the repayment suites, or ``None`` when the
    sandbox org has no credit product.

    Prefers an existing credit account over minting one so repeated runs don't
    accumulate them; falls back to a create.
    """
    global _cached_id, _resolved
    if _resolved:
        return _cached_id
    _resolved = True

    existing = _find_existing_credit_account_id()
    if existing is not None:
        _cached_id = existing
        return _cached_id

    customer_id = get_or_create_shared_account()["customer_id"]
    try:
        res = build_accounts_api().create_account_with_http_info(
            build_create_credit_account_request(customer_id, SANDBOX_CREDIT_TERMS)
        )
    except ApiException as err:
        if is_capability_error(err):
            print(
                "No credit product is configured on this sandbox org, so credit "
                f"accounts cannot be created; skipping. {error_body(err)}"
            )
            return None
        raise

    created_id = getattr(unwrap(res.data.data), "id", None)
    _cached_id = created_id if isinstance(created_id, str) else None
    return _cached_id
