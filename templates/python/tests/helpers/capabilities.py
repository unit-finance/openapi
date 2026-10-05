"""Capability detection, the Python analogue of Node's ``helpers/capabilities.ts``.

The sandbox answers with these statuses when an operation is real but the org
behind the token was never provisioned for it — no credit terms, no rewards
program, no statement history. These are org configuration, not bad requests,
so the helpers that hit them return ``None`` (unavailable) and the calling
suite aborts instead of failing. Same pattern as ``holds.py`` and ``credit.py``.
"""

from typing import Any

from unit_finance_sdk.exceptions import ApiException

CAPABILITY_STATUSES = {400, 403, 404, 405, 409, 422, 500}


def is_capability_error(err: Any) -> bool:
    return isinstance(err, ApiException) and err.status in CAPABILITY_STATUSES


def error_body(err: Any) -> str:
    """The sandbox's error body, for the warning that explains a skip."""
    return str(getattr(err, "body", "") or "")
