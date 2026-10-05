from helpers.api import build_recurring_repayments_api, requires_token, unwrap
from helpers.repayments import RECURRING_REPAYMENT_TYPES


@requires_token
def test_returns_a_json_api_list_with_page_limit_20():
    res = build_recurring_repayments_api().list_recurring_repayments_with_http_info(
        page_limit="20"
    )

    assert res.status_code == 200
    recurring_repayments = res.data.data
    assert isinstance(recurring_repayments, list)
    assert len(recurring_repayments) <= 20
    for item in recurring_repayments:
        recurring = unwrap(item)
        assert isinstance(recurring.id, str)
        assert recurring.type in RECURRING_REPAYMENT_TYPES
        assert recurring.attributes is not None
