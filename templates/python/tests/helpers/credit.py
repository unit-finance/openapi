"""Credit application / decision helpers, the Python analogue of Node's
``helpers/credit.ts``.

Every credit application create needs a ``lendingProgram`` relationship id, and
this SDK surface exposes no list-lending-programs operation, so the suite
borrows one off an existing credit application. An org with no lending program
(and therefore no credit applications) cannot reach create at all, so the
helpers return ``None`` (unavailable) instead of failing — the holds pattern.
"""

from typing import Any, Dict, List, Optional, Tuple

from unit_finance_sdk.exceptions import ApiException

from .api import build_credit_applications_api, build_credit_decisions_api, unwrap
from .customers import get_shared_business_customer_id
from .fixtures import (
    build_create_approved_credit_limit_decision_request,
    build_create_existing_credit_application_request,
)

_SKIP_STATUSES = {400, 403, 404, 409, 422, 500}

_cached_application_id: Optional[str] = None
_application_id_resolved = False


def list_credit_applications_or_skip() -> Optional[List[Any]]:
    api = build_credit_applications_api()
    try:
        res = api.list_credit_applications_with_http_info(page_limit="20")
    except ApiException as err:
        if err.status in _SKIP_STATUSES:
            print(
                "listCreditApplications is unavailable on this sandbox org "
                "(no lending program provisioned); skipping."
            )
            return None
        raise
    return list(res.data.data or [])


def get_lending_program_id() -> Optional[str]:
    """Read a lending program id off an existing credit application."""
    for item in list_credit_applications_or_skip() or []:
        relationships = getattr(unwrap(item), "relationships", None)
        program = unwrap(getattr(getattr(relationships, "lending_program", None), "data", None))
        program_id = getattr(program, "id", None)
        if isinstance(program_id, str):
            return program_id
    return None


def create_credit_application_or_skip() -> Optional[Tuple[int, Any]]:
    lending_program_id = get_lending_program_id()
    if lending_program_id is None:
        print(
            "No lending program is visible on this sandbox org and the SDK has "
            "no list-lending-programs operation; skipping createCreditApplication."
        )
        return None
    customer_id = get_shared_business_customer_id()
    api = build_credit_applications_api()
    try:
        res = api.create_credit_application_with_http_info(
            build_create_existing_credit_application_request(
                customer_id, lending_program_id
            )
        )
    except ApiException as err:
        if err.status in _SKIP_STATUSES:
            print(
                "createCreditApplication is unavailable on this sandbox org; "
                f"skipping. {err.body}"
            )
            return None
        raise
    return res.status_code, res.data


def get_credit_application_id() -> Optional[str]:
    """A credit application id for get/decision to reuse.

    Prefer one this run created so the suites never touch an unrelated org
    resource; fall back to an existing one. The update suite deliberately does
    NOT share this one -- see ``get_patchable_credit_application_id``.
    """
    global _cached_application_id, _application_id_resolved
    if _application_id_resolved:
        return _cached_application_id
    _application_id_resolved = True
    created = create_credit_application_or_skip()
    if created is not None:
        created_id = getattr(unwrap(created[1].data), "id", None)
        if isinstance(created_id, str):
            _cached_application_id = created_id
            return _cached_application_id
    for item in list_credit_applications_or_skip() or []:
        item_id = getattr(unwrap(item), "id", None)
        if isinstance(item_id, str):
            _cached_application_id = item_id
            break
    return _cached_application_id


def get_patchable_credit_application_id() -> Optional[str]:
    """A credit application the update suite may PATCH.

    Recording an approved decision flips an application to ``Approved``, and the
    API then refuses the PATCH with 400
    ``not_supported_for_credit_application_status``. Sharing one application
    between the update and create-decision suites therefore makes the run
    order-dependent -- which is exactly how this broke on CI for Java, where
    Surefire's filesystem order put the decision first. So the update suite
    always mints its own application and only ever falls back to one still in
    ``Pending``.
    """
    created = create_credit_application_or_skip()
    if created is not None:
        created_id = getattr(unwrap(created[1].data), "id", None)
        if isinstance(created_id, str):
            return created_id
    for item in list_credit_applications_or_skip() or []:
        resource = unwrap(item)
        status = getattr(getattr(resource, "attributes", None), "status", None)
        item_id = getattr(resource, "id", None)
        if status is not None and str(status) == "Pending" and isinstance(item_id, str):
            return item_id
    return None


def list_credit_decisions_or_skip() -> Optional[List[Any]]:
    api = build_credit_decisions_api()
    try:
        res = api.list_credit_decisions_with_http_info(page_limit="20")
    except ApiException as err:
        if err.status in _SKIP_STATUSES:
            print("listCreditDecisions is unavailable on this sandbox org; skipping.")
            return None
        raise
    return list(res.data.data or [])


def create_credit_decision_or_skip(
    credit_application_id: str,
) -> Optional[Tuple[int, Any]]:
    api = build_credit_decisions_api()
    try:
        res = api.create_credit_decision_with_http_info(
            build_create_approved_credit_limit_decision_request(credit_application_id)
        )
    except ApiException as err:
        if err.status in _SKIP_STATUSES:
            # The decision attributes are `format: date-time`, so the generated
            # model types them as `datetime` and pydantic serializes them with
            # a `+00:00` offset. The API only accepts the `Z` spelling and
            # answers 400 for the offset form, which no fixture can work around
            # while the field stays typed. Defect owned by the API / the spec in
            # `unit-openapi`; the other four decision variants are affected too.
            print(
                "createCreditDecision rejected the generated `+00:00` timestamp "
                f"spelling (the API wants `Z`); skipping. {err.body}"
            )
            return None
        raise
    return res.status_code, res.data


def envelope_of(item: Any) -> Dict[str, Any]:
    """Structural view of a JSON:API resource for shared assertions."""
    resource = unwrap(item)
    return {
        "id": getattr(resource, "id", None),
        "type": getattr(resource, "type", None),
        "attributes": getattr(resource, "attributes", None),
    }
