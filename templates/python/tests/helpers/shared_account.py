"""Shared deposit account, the Python analogue of Node's ``sharedAccount.ts``."""

import json
import time
import urllib.request
from typing import Any, Dict, Optional

from unit_finance_sdk import (
    CreateApplicationRequest,
    CreateIndividualApplicationRequest,
)

from .api import BASE_PATH, TOKEN, build_accounts_api, build_applications_api, unwrap
from .fixtures import (
    build_business_application_request,
    build_create_deposit_account_request,
    build_individual_application_request,
)

_cached_account: Optional[Dict[str, Any]] = None
_cached_individual_customer_id: Optional[str] = None


def _customer_id_from_application(app) -> str:
    relationships = getattr(app, "relationships", None)
    customer = getattr(relationships, "customer", None)
    # ``customer.data`` is a polymorphic ``RelationshipData`` oneOf wrapper
    # (ResourceIdentifier or List[ResourceIdentifier]); unwrap it before
    # reading the id.
    data = unwrap(getattr(customer, "data", None))
    if isinstance(data, list):
        data = data[0] if data else None
    customer_id = getattr(data, "id", None)
    if not customer_id:
        raise RuntimeError("Application is missing a customer relationship.")
    return customer_id


def _fund_deposit_account(account_id: str) -> None:
    """Seed a positive balance on a freshly created deposit account.

    TODO: Replace this raw sandbox call once the spec exposes a first-class
    credit/funding operation (e.g. a received-ACH or book-credit endpoint). The
    ``/sandbox/payments`` (achPayment, direction "Credit") simulation is NOT
    part of the curated 0.3.0 spec, so it can't go through the generated SDK yet
    — we hit it directly with urllib purely as test setup. When a funding
    endpoint is added to the spec, swap this for the generated SDK method and
    delete the raw request below.
    """
    body = json.dumps(
        {
            "data": {
                "type": "achPayment",
                "attributes": {
                    "amount": 50000,
                    "direction": "Credit",
                    "description": "SDK integration test funding",
                },
                "relationships": {
                    "account": {
                        "data": {"type": "depositAccount", "id": account_id}
                    },
                },
            },
        }
    ).encode("utf-8")
    request = urllib.request.Request(
        f"{BASE_PATH}/sandbox/payments",
        data=body,
        method="POST",
        headers={
            "Authorization": f"Bearer {TOKEN}",
            "Content-Type": "application/vnd.api+json",
        },
    )
    with urllib.request.urlopen(request) as response:
        response.read()


def _wait_for_available_balance(accounts_api, account_id: str) -> None:
    """Poll ``get_account`` until the seeded credit reflects in the account's
    available balance. The sandbox ACH credit above does not always settle
    synchronously, so without this fee/debit suites can race the credit and fail
    with ``InsufficientFunds``.
    """
    for _ in range(20):
        account = unwrap(accounts_api.get_account(account_id).data)
        available = getattr(account.attributes, "available", None)
        if available is not None and available > 0:
            return
        time.sleep(0.5)
    raise RuntimeError(
        f"Deposit account {account_id} never reflected the seeded credit balance."
    )


def _create_deposit_account(fund: bool = False) -> Dict[str, Any]:
    apps_api = build_applications_api()
    accounts_api = build_accounts_api()

    created = apps_api.create_application_with_http_info(
        build_business_application_request()
    )
    if created.status_code != 201:
        raise RuntimeError(
            f"Failed to create business application: expected status 201, "
            f"got {created.status_code}."
        )

    app_id = unwrap(created.data.data).id
    app = apps_api.get_by_id(app_id)
    customer_id = _customer_id_from_application(unwrap(app.data))

    account_res = accounts_api.create_account_with_http_info(
        build_create_deposit_account_request(customer_id)
    )
    if account_res.status_code != 201:
        raise RuntimeError(
            f"Failed to create deposit account: expected status 201, "
            f"got {account_res.status_code}."
        )

    account = unwrap(account_res.data.data)
    if fund:
        _fund_deposit_account(account.id)
        _wait_for_available_balance(accounts_api, account.id)
    return {
        "id": account.id,
        "type": account.type,
        "customer_id": customer_id,
        "routing_number": account.attributes.routing_number,
        "account_number": account.attributes.account_number,
    }


def get_or_create_shared_deposit_account() -> Dict[str, Any]:
    global _cached_account
    if _cached_account is not None:
        return _cached_account
    _cached_account = _create_deposit_account(fund=True)
    return _cached_account


def create_dedicated_deposit_account() -> Dict[str, Any]:
    return _create_deposit_account()


def get_or_create_shared_individual_customer_id() -> str:
    global _cached_individual_customer_id
    if _cached_individual_customer_id is not None:
        return _cached_individual_customer_id

    apps_api = build_applications_api()
    created = apps_api.create_application_with_http_info(
        CreateApplicationRequest(
            actual_instance=CreateIndividualApplicationRequest.from_dict(
                build_individual_application_request()
            )
        )
    )
    if created.status_code != 201:
        raise RuntimeError(
            f"Failed to create individual application: expected status 201, "
            f"got {created.status_code}."
        )

    app_id = unwrap(created.data.data).id
    app = apps_api.get_by_id(app_id)
    _cached_individual_customer_id = _customer_id_from_application(unwrap(app.data))
    return _cached_individual_customer_id
