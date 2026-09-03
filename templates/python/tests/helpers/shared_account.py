"""Shared funded account context, the Python analogue of Node's ``sharedAccount.ts``.

Lazily provisions a funded deposit account (plus a secondary account and an
individual customer) that fees/accounts/payments suites reuse. pytest runs in
a single process, so this module-level cache is shared across test files within
a run.
"""

from typing import Optional, TypedDict

from unit_finance_sdk import CreateApplicationRequest, CreateIndividualApplicationRequest

from .api import build_accounts_api, build_api, build_payments_api, unwrap
from .fixtures import (
    build_ach_credit_payment_request,
    build_create_deposit_account_request,
    build_individual_application_request,
)
from .shared_app import get_or_create_shared_business_app


class SharedAccountContext(TypedDict):
    customer_id: str
    account_id: str
    secondary_account_id: str
    individual_customer_id: str


_cached: Optional[SharedAccountContext] = None


def _customer_id_from_application(application_id: str) -> str:
    apps_api = build_api()
    res = apps_api.get_by_id_with_http_info(application_id)
    if res.status_code != 200:
        raise RuntimeError(
            f"Failed to load application {application_id}: status {res.status_code}."
        )
    app = unwrap(res.data.data)
    relationships = getattr(app, "relationships", None)
    customer = getattr(relationships, "customer", None)
    customer_data = getattr(customer, "data", None)
    customer_id = getattr(customer_data, "id", None)
    if not customer_id:
        status = getattr(getattr(app, "attributes", None), "status", None)
        raise RuntimeError(
            f"Application {application_id} has no customer relationship yet "
            f"(status={status})."
        )
    return customer_id


def _create_deposit_account(customer_id: str) -> str:
    accounts_api = build_accounts_api()
    res = accounts_api.create_account_with_http_info(
        build_create_deposit_account_request(customer_id)
    )
    if res.status_code != 201:
        raise RuntimeError(f"Failed to create deposit account: status {res.status_code}.")
    return unwrap(res.data.data).id


def _fund_account(account_id: str) -> None:
    payments_api = build_payments_api()
    res = payments_api.create_payment_with_http_info(
        build_ach_credit_payment_request(account_id)
    )
    if res.status_code != 201:
        raise RuntimeError(f"Failed to fund account {account_id}: status {res.status_code}.")


def _individual_customer_id() -> str:
    apps_api = build_api()
    res = apps_api.create_application_with_http_info(
        CreateApplicationRequest(
            actual_instance=CreateIndividualApplicationRequest.from_dict(
                build_individual_application_request()
            )
        )
    )
    if res.status_code != 201:
        raise RuntimeError(
            f"Failed to create individual application: status {res.status_code}."
        )
    return _customer_id_from_application(unwrap(res.data.data).id)


def get_or_create_shared_account_context() -> SharedAccountContext:
    global _cached
    if _cached is not None:
        return _cached

    shared_app = get_or_create_shared_business_app()
    customer_id = _customer_id_from_application(shared_app["id"])
    account_id = _create_deposit_account(customer_id)
    _fund_account(account_id)
    secondary_account_id = _create_deposit_account(customer_id)
    individual_customer_id = _individual_customer_id()

    _cached = {
        "customer_id": customer_id,
        "account_id": account_id,
        "secondary_account_id": secondary_account_id,
        "individual_customer_id": individual_customer_id,
    }
    return _cached
