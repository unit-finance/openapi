from helpers.api import build_repayments_api, requires_token, unwrap
from helpers.repayments import REPAYMENT_TYPES


@requires_token
def test_returns_a_json_api_list_with_page_limit_20():
    res = build_repayments_api().list_repayments_with_http_info(page_limit="20")

    assert res.status_code == 200
    repayments = res.data.data
    assert isinstance(repayments, list)
    assert len(repayments) <= 20
    for item in repayments:
        repayment = unwrap(item)
        assert isinstance(repayment.id, str)
        assert repayment.type in REPAYMENT_TYPES
        assert repayment.attributes is not None
