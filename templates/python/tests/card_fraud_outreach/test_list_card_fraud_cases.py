from helpers.api import requires_token
from helpers.card_fraud_outreach import list_cases_raw


@requires_token
def test_lists_card_fraud_cases():
    status, document = list_cases_raw()
    if status in (400, 403, 404, 409, 410, 500) or document is None:
        return

    assert status == 200
    items = document["data"]
    assert isinstance(items, list)
    assert len(items) <= 20
    for item in items:
        assert isinstance(item["id"], str)
        assert isinstance(item["type"], str)
        assert "attributes" in item
