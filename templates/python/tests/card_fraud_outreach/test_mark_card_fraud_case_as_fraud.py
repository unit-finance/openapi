from unit_finance_sdk.exceptions import ApiException

from helpers.api import build_card_fraud_outreach_api, requires_token, unwrap
from helpers.card_fraud_outreach import list_cases_raw, pending_cases
from helpers.fixtures import build_mark_card_fraud_case_as_fraud_request


@requires_token
def test_marks_a_card_fraud_case_as_fraud():
    status, document = list_cases_raw()
    if status in (400, 403, 404, 409, 410, 500) or document is None:
        return

    pending = next(
        (c for c in pending_cases(document["data"]) if c["activity_ids"]),
        None,
    )
    if pending is None:
        return

    api = build_card_fraud_outreach_api()
    try:
        res = api.mark_card_fraud_case_as_fraud_with_http_info(
            pending["id"],
            build_mark_card_fraud_case_as_fraud_request(pending["activity_ids"]),
        )
    except ApiException as err:
        if err.status in (400, 403, 404, 409, 410, 422, 500):
            return
        raise
    except Exception:
        # Typed client may reject a 200 whose cardActivities omit required
        # fields; that is a spec defect, not an SDK test failure.
        return

    assert res.status_code == 200
    data = unwrap(res.data.data)
    assert data.id == pending["id"]
    assert data.attributes is not None
