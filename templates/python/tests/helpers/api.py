"""Sandbox client helpers, the Python analogue of Node's ``helpers/api.ts``."""

import os
import secrets
import time
from typing import Any

import pytest
from unit_finance_sdk import (
    AccountsApi,
    ApiClient,
    ApplicationsApi,
    Configuration,
    FeesApi,
    PaymentsApi,
)

TOKEN = os.environ.get("UNIT_SANDBOX_TOKEN")
BASE_PATH = os.environ.get("UNIT_SANDBOX_BASE_URL", "https://api.s.unit.sh")

# Gate for every live suite: when no sandbox token is present the suite is
# reported as skipped and the overall run still exits 0 (matching Node/Java).
requires_token = pytest.mark.skipif(
    not TOKEN,
    reason="UNIT_SANDBOX_TOKEN is unset; set it in .env or the shell to run sandbox tests.",
)

# Stable id for this run; stamped into created applications' tags so the
# artifacts can be filtered out of the sandbox later.
TEST_RUN_ID = f"sdk-python-{int(time.time() * 1000):x}-{secrets.token_hex(3)}"


def _configuration() -> Configuration:
    if not TOKEN:
        raise RuntimeError(
            "UNIT_SANDBOX_TOKEN is required to talk to the sandbox; set it in .env or the shell.",
        )
    return Configuration(access_token=TOKEN, host=BASE_PATH)


def build_applications_api() -> ApplicationsApi:
    """Construct an ``ApplicationsApi`` bound to the sandbox."""
    return ApplicationsApi(ApiClient(_configuration()))


def build_accounts_api() -> AccountsApi:
    """Construct an ``AccountsApi`` bound to the sandbox."""
    return AccountsApi(ApiClient(_configuration()))


def build_fees_api() -> FeesApi:
    """Construct a ``FeesApi`` bound to the sandbox."""
    return FeesApi(ApiClient(_configuration()))


def build_payments_api() -> PaymentsApi:
    """Construct a ``PaymentsApi`` bound to the sandbox."""
    return PaymentsApi(ApiClient(_configuration()))


def build_api() -> ApplicationsApi:
    """Back-compat alias used by the applications suites."""
    return build_applications_api()


def unwrap(obj: Any) -> Any:
    """Return the concrete variant behind a generated ``oneOf`` wrapper.

    Polymorphic JSON:API ``data``/``included`` members deserialize into a
    union model exposing the matched variant via ``actual_instance``;
    non-polymorphic members are returned unchanged.
    """
    return getattr(obj, "actual_instance", obj)
