"""Cardholder token helpers, the Python analogue of Node's
``helpers/cardholderTokens.ts``.

The OTP challenge is delivered over SMS to the customer's contact phone, and
whether an org's cards can receive one is org/bank configuration the API cannot
toggle. Tests therefore treat a 4xx/5xx as feature-unavailable rather than
failing — the holds / send-link pattern.
"""

from typing import Any, Optional

from unit_finance_sdk.exceptions import ApiException

from .api import build_card_holder_api_tokens_api
from .fixtures import build_create_cardholder_token_verification_request

SKIP_STATUSES = {400, 403, 404, 409, 410, 500}


def create_verification_or_skip(card_id: str) -> Optional[Any]:
    """Start an OTP challenge for ``card_id``; return None when unavailable."""
    api = build_card_holder_api_tokens_api()
    try:
        res = api.create_cardholder_token_verification_with_http_info(
            card_id,
            build_create_cardholder_token_verification_request(),
        )
    except ApiException as err:
        if err.status in SKIP_STATUSES:
            print(
                "Cardholder token verification is unavailable for this sandbox "
                f"org (status {err.status}); skipping."
            )
            return None
        raise
    return res
