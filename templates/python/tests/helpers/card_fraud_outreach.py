"""Card fraud outreach helpers, the Python analogue of Node's
``helpers/cardFraudOutreach.ts``.

CreatePolicy needs email/message outreach settings and a white-label theme
that a typical sandbox org does not provision. There is also no list-policies
operation, so get/update can only run after a successful create. Tests send
placeholder relationship ids ``"0"`` and treat a 4xx/5xx as
feature-unavailable — the send-link / holds pattern.

Card fraud cases are inbound (the suite cannot mint one). List may be empty;
get/mark then abort. Mark also needs a Pending case with numeric activity ids.
"""

from typing import Any, Dict, List, Optional, Tuple

from unit_finance_sdk.exceptions import ApiException

from .api import build_card_fraud_outreach_api
from .check_deposits import read_json
from .fixtures import build_create_policy_request

_SKIP_STATUSES = {400, 403, 404, 409, 410, 500}

_cached_policy: Optional[Dict[str, Any]] = None


def create_policy_or_skip() -> Optional[Tuple[int, Dict[str, Any]]]:
    """Attempt create with placeholder relationship ids; skip on 4xx/5xx."""
    api = build_card_fraud_outreach_api()
    try:
        res = api.create_policy_with_http_info(build_create_policy_request())
    except ApiException as err:
        if err.status in _SKIP_STATUSES:
            print(
                "Card fraud outreach policy create is unavailable on this "
                "sandbox org (missing outreach settings / white-label theme); "
                "skipping."
            )
            return None
        raise
    if res.status_code in _SKIP_STATUSES:
        print(
            "Card fraud outreach policy create is unavailable on this "
            "sandbox org (missing outreach settings / white-label theme); "
            "skipping."
        )
        return None
    return res.status_code, res.data


def get_or_create_policy() -> Optional[Any]:
    """Lazily create one policy for get/update to reuse, or None when create aborts."""
    global _cached_policy
    if _cached_policy is not None:
        return _cached_policy
    created = create_policy_or_skip()
    if created is None:
        return None
    _cached_policy = created[1].data
    return _cached_policy


def list_cases_raw() -> Tuple[int, Optional[Dict[str, Any]]]:
    """List card fraud cases, reading the raw JSON:API document.

    Typed deserialization can fail when ``FraudCaseCardActivityType`` marks
    fields required that the sandbox omits, so tests assert envelope shape
    against the raw body (same pattern as authorized-users list).
    """
    api = build_card_fraud_outreach_api()
    try:
        return read_json(api.list_card_fraud_cases_without_preload_content(page_limit="20"))
    except ApiException as err:
        if err.status in _SKIP_STATUSES:
            return err.status, None
        raise


def get_case_raw(case_id: str) -> Tuple[int, Optional[Dict[str, Any]]]:
    api = build_card_fraud_outreach_api()
    try:
        return read_json(api.get_card_fraud_case_by_id_without_preload_content(case_id))
    except ApiException as err:
        if err.status in _SKIP_STATUSES:
            return err.status, None
        raise


def pending_cases(items: List[Any]) -> List[Dict[str, Any]]:
    out: List[Dict[str, Any]] = []
    for item in items:
        if not isinstance(item, dict) or not isinstance(item.get("id"), str):
            continue
        attributes = item.get("attributes")
        decision = attributes.get("decision") if isinstance(attributes, dict) else None
        if decision is not None and decision != "Pending":
            continue
        activity_ids: List[int] = []
        activities = attributes.get("cardActivities") if isinstance(attributes, dict) else None
        if isinstance(activities, list):
            for activity in activities:
                if not isinstance(activity, dict):
                    continue
                raw = activity.get("id")
                try:
                    activity_ids.append(int(raw))
                except (TypeError, ValueError):
                    continue
        out.append({"id": item["id"], "type": item.get("type"), "activity_ids": activity_ids})
    return out
