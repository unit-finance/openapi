"""Shared deposit accounts, the Python analogue of Node's ``sharedAccount.ts``.

Lazily provisions a customer plus two deposit accounts that downstream
fees/accounts/payments suites reuse. pytest runs in a single process, so
this module-level cache is shared across test files within a run.
"""

from typing import Any, Dict, Optional

from unit_finance_sdk import CreateApplicationRequest, CreateIndividualApplicationRequest

from .api import build_accounts_api, build_api, sleep, unwrap
from .fixtures import (
    build_create_deposit_account_request,
    build_deposit_account_request_for_customer,
    build_individual_application_request,
)
from .shared_app import get_or_create_shared_business_app

_cached: Optional[Dict[str, Any]] = None
_individual_customer_id: Optional[str] = None


def _wait_for_customer_id(application_id: str) -> str:
    api = build_api()
    for _ in range(30):
        res = api.get_by_id_with_http_info(application_id)
        if res.status_code != 200:
            raise RuntimeError(
                f"Failed to fetch application {application_id}: expected status 200, "
                f"got {res.status_code}."
            )
        created = unwrap(res.data.data)
        relationships = getattr(created, "relationships", None)
        customer = getattr(relationships, "customer", None)
        customer_data = unwrap(getattr(customer, "data", None))
        if customer_data is not None and customer_data.id:
            return customer_data.id
        sleep(1)
    raise RuntimeError(
        f"Timed out waiting for customer on application {application_id}.",
    )


def get_or_create_shared_account() -> Dict[str, Any]:
    global _cached
    if _cached is not None:
        return _cached

    shared_app = get_or_create_shared_business_app()
    customer_id = _wait_for_customer_id(shared_app["id"])
    accounts_api = build_accounts_api()

    primary_res = accounts_api.create_account_with_http_info(
        build_deposit_account_request_for_customer(customer_id)
    )
    if primary_res.status_code != 201:
        raise RuntimeError(
            f"Failed to create primary deposit account: expected status 201, "
            f"got {primary_res.status_code}."
        )

    counterparty_res = accounts_api.create_account_with_http_info(
        build_deposit_account_request_for_customer(customer_id)
    )
    if counterparty_res.status_code != 201:
        raise RuntimeError(
            f"Failed to create counterparty deposit account: expected status 201, "
            f"got {counterparty_res.status_code}."
        )

    primary = unwrap(primary_res.data.data)
    counterparty = unwrap(counterparty_res.data.data)

    _cached = {
        "account_id": primary.id,
        "counterparty_account_id": counterparty.id,
        "customer_id": customer_id,
        "routing_number": primary.attributes.routing_number,
        "account_number": primary.attributes.account_number,
    }
    return _cached


def create_dedicated_deposit_account() -> Any:
    """Create an isolated deposit account for tests that mutate account state."""
    shared = get_or_create_shared_account()
    api = build_accounts_api()
    res = api.create_account_with_http_info(
        build_create_deposit_account_request(shared["customer_id"])
    )
    if res.status_code != 201:
        raise RuntimeError(
            f"Failed to create dedicated deposit account: expected status 201, "
            f"got {res.status_code}."
        )
    return unwrap(res.data.data)


def get_or_create_individual_customer_id() -> str:
    """Return an individual customer id for add/remove-account-owners flows."""
    global _individual_customer_id
    if _individual_customer_id is not None:
        return _individual_customer_id

    api = build_api()
    res = api.create_application_with_http_info(
        CreateApplicationRequest(
            actual_instance=CreateIndividualApplicationRequest.from_dict(
                build_individual_application_request()
            )
        )
    )
    if res.status_code != 201:
        raise RuntimeError(
            f"Failed to create individual application: expected status 201, "
            f"got {res.status_code}."
        )

    created = unwrap(res.data.data)
    _individual_customer_id = _wait_for_customer_id(created.id)
    return _individual_customer_id
