"""Account-hold helpers, the Python analogue of Node's ``helpers/holds.ts``."""

from typing import Any, Optional

from unit_finance_sdk.exceptions import ApiException

from .fixtures import build_create_account_hold_request


def create_account_hold_or_skip(api: Any, account_id: str) -> Optional[Any]:
    """Create an account hold, or return ``None`` when the sandbox org's bank
    agreement has ``enableHoldOnAccounts`` turned off.

    That flag is a property of the org the token belongs to and cannot be
    toggled from the API, so every hold-creating test has to treat it as
    feature-unavailable rather than fail.
    """
    try:
        return api.create_account_hold_with_http_info(
            build_create_account_hold_request(account_id)
        )
    except ApiException as err:
        if err.status == 400 and "enableHoldOnAccounts" in str(err.body):
            print(
                "Account holds are disabled on this sandbox org's bank "
                "agreement; skipping."
            )
            return None
        raise
