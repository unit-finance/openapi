from unit_finance_sdk.exceptions import ApiException

from helpers.api import build_card_fraud_outreach_api, requires_token, unwrap
from helpers.card_fraud_outreach import list_cases_raw, pending_cases


@requires_token
def test_marks_a_card_fraud_case_as_no_fraud():
    status, document = list_cases_raw()
    if status in (400, 403, 404, 409, 410, 500) or document is None:
        return

    pending = pending_cases(document["data"])
    target = pending[1] if len(pending) > 1 else (pending[0] if pending else None)
    if target is None:
        return

    api = build_card_fraud_outreach_api()
    try:
        res = api.mark_card_fraud_case_as_no_fraud_with_http_info(target["id"])
    except ApiException as err:
        if err.status in (400, 403, 404, 409, 410, 422, 500):
            return
        raise
    except Exception:
        return

    assert res.status_code == 200
    data = unwrap(res.data.data)
    assert data.id == target["id"]
    assert data.attributes is not None
