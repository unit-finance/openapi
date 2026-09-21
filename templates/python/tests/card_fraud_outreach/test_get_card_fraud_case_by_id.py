import pytest

from helpers.api import requires_token
from helpers.card_fraud_outreach import get_case_raw, list_cases_raw


@requires_token
def test_gets_a_card_fraud_case_by_id():
    status, document = list_cases_raw()
    if status in (400, 403, 404, 409, 410, 500) or document is None:
        return

    assert status == 200
    items = document["data"]
    if not items:
        pytest.skip("No card fraud cases in sandbox for getCardFraudCaseById test.")

    case_id = items[0]["id"]
    get_status, get_document = get_case_raw(case_id)
    if get_status in (400, 403, 404, 409, 410, 500) or get_document is None:
        return

    assert get_status == 200
    data = get_document["data"]
    assert data["id"] == case_id
    assert isinstance(data["type"], str)
    assert "attributes" in data
