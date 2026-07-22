"""Shared deposit account, the Python analogue of Node's ``sharedAccount.ts``."""

from typing import Any, Dict, Optional

from unit_finance_sdk import (
    CreateApplicationRequest,
    CreateIndividualApplicationRequest,
)

from .api import build_accounts_api, build_applications_api, unwrap
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
    data = getattr(customer, "data", None)
    customer_id = getattr(data, "id", None)
    if not customer_id:
        raise RuntimeError("Application is missing a customer relationship.")
    return customer_id


def _create_deposit_account() -> Dict[str, Any]:
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
    _cached_account = _create_deposit_account()
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
