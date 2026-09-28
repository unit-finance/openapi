"""Sandbox client helpers, the Python analogue of Node's ``helpers/api.ts``."""

import os
import secrets
import time
from typing import Any

import pytest
from unit_finance_sdk import (
    AccountsApi,
    ApiClient,
    ApplicationDocumentsApi,
    ApplicationsApi,
    AuthorizedUsersApi,
    CardFraudOutreachApi,
    CardHolderAPITokensApi,
    CardsAddToMobileWalletApi,
    CardsApi,
    CardsATMLocationsApi,
    CardsAuthorizationRequestsApi,
    CardsAuthorizationsApi,
    CheckDepositsApi,
    CheckPaymentsApi,
    Configuration,
    CounterpartiesApi,
    CreditApplicationsApi,
    CreditDecisionsApi,
    CustomersApi,
    DACAApi,
    DisputesApi,
    FeesApi,
    InstitutionsApi,
    InterestApi,
    LendingProgramsApi,
    PaymentsApi,
    PositivePayApi,
    ReceivablesManagementApi,
    TransactionsApi,
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


def build_api() -> ApplicationsApi:
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


def build_cards_api() -> CardsApi:
    """Construct a ``CardsApi`` bound to the sandbox."""
    return CardsApi(ApiClient(_configuration()))


def build_transactions_api() -> TransactionsApi:
    """Construct a ``TransactionsApi`` bound to the sandbox."""
    return TransactionsApi(ApiClient(_configuration()))


def build_customers_api() -> CustomersApi:
    """Construct a ``CustomersApi`` bound to the sandbox."""
    return CustomersApi(ApiClient(_configuration()))


def build_check_deposits_api() -> CheckDepositsApi:
    """Construct a ``CheckDepositsApi`` bound to the sandbox."""
    return CheckDepositsApi(ApiClient(_configuration()))


def build_check_payments_api() -> CheckPaymentsApi:
    """Construct a ``CheckPaymentsApi`` bound to the sandbox."""
    return CheckPaymentsApi(ApiClient(_configuration()))


def build_counterparties_api() -> CounterpartiesApi:
    """Construct a ``CounterpartiesApi`` bound to the sandbox."""
    return CounterpartiesApi(ApiClient(_configuration()))


def build_application_documents_api() -> ApplicationDocumentsApi:
    """Construct an ``ApplicationDocumentsApi`` bound to the sandbox."""
    return ApplicationDocumentsApi(ApiClient(_configuration()))


def build_authorized_users_api() -> AuthorizedUsersApi:
    """Construct an ``AuthorizedUsersApi`` bound to the sandbox."""
    return AuthorizedUsersApi(ApiClient(_configuration()))


def build_card_fraud_outreach_api() -> CardFraudOutreachApi:
    """Construct a ``CardFraudOutreachApi`` bound to the sandbox."""
    return CardFraudOutreachApi(ApiClient(_configuration()))


def build_card_holder_api_tokens_api() -> CardHolderAPITokensApi:
    """Construct a ``CardHolderAPITokensApi`` bound to the sandbox."""
    return CardHolderAPITokensApi(ApiClient(_configuration()))


def build_cards_atm_locations_api() -> CardsATMLocationsApi:
    """Construct a ``CardsATMLocationsApi`` bound to the sandbox."""
    return CardsATMLocationsApi(ApiClient(_configuration()))


def build_cards_add_to_mobile_wallet_api() -> CardsAddToMobileWalletApi:
    """Construct a ``CardsAddToMobileWalletApi`` bound to the sandbox."""
    return CardsAddToMobileWalletApi(ApiClient(_configuration()))


def build_cards_authorization_requests_api() -> CardsAuthorizationRequestsApi:
    """Construct a ``CardsAuthorizationRequestsApi`` bound to the sandbox."""
    return CardsAuthorizationRequestsApi(ApiClient(_configuration()))


def build_cards_authorizations_api() -> CardsAuthorizationsApi:
    """Construct a ``CardsAuthorizationsApi`` bound to the sandbox."""
    return CardsAuthorizationsApi(ApiClient(_configuration()))


def build_daca_api() -> DACAApi:
    """Construct a ``DACAApi`` bound to the sandbox."""
    return DACAApi(ApiClient(_configuration()))


def build_disputes_api() -> DisputesApi:
    """Construct a ``DisputesApi`` bound to the sandbox."""
    return DisputesApi(ApiClient(_configuration()))


def build_institutions_api() -> InstitutionsApi:
    """Construct an ``InstitutionsApi`` bound to the sandbox."""
    return InstitutionsApi(ApiClient(_configuration()))


def build_interest_api() -> InterestApi:
    """Construct an ``InterestApi`` bound to the sandbox."""
    return InterestApi(ApiClient(_configuration()))


def build_lending_programs_api() -> LendingProgramsApi:
    """Construct a ``LendingProgramsApi`` bound to the sandbox."""
    return LendingProgramsApi(ApiClient(_configuration()))


def build_positive_pay_api() -> PositivePayApi:
    """Construct a ``PositivePayApi`` bound to the sandbox."""
    return PositivePayApi(ApiClient(_configuration()))


def build_receivables_management_api() -> ReceivablesManagementApi:
    """Construct a ``ReceivablesManagementApi`` bound to the sandbox."""
    return ReceivablesManagementApi(ApiClient(_configuration()))


def build_credit_applications_api() -> CreditApplicationsApi:
    """Construct a ``CreditApplicationsApi`` bound to the sandbox."""
    return CreditApplicationsApi(ApiClient(_configuration()))


def build_credit_decisions_api() -> CreditDecisionsApi:
    """Construct a ``CreditDecisionsApi`` bound to the sandbox."""
    return CreditDecisionsApi(ApiClient(_configuration()))


# ``GET /credit-applications/{id}`` and ``GET /credit-decisions/{id}`` reject any
# request that omits a ``Content-Type: application/vnd.api+json`` header with
# 415, even though neither takes a body. The spec declares no request body for
# them, so the generated clients send no ``Content-Type`` and every
# single-resource read fails. Tests pass this via ``_headers``.
VND_API_JSON_HEADERS = {"Content-Type": "application/vnd.api+json"}


def sleep(seconds: float) -> None:
    """Block for ``seconds`` (mirrors Node's ``sleep`` helper)."""
    time.sleep(seconds)


def unwrap(obj: Any) -> Any:
    """Return the concrete variant behind a generated ``oneOf`` wrapper.

    Polymorphic JSON:API ``data``/``included`` members deserialize into a
    union model exposing the matched variant via ``actual_instance``;
    non-polymorphic members are returned unchanged.
    """
    return getattr(obj, "actual_instance", obj)
