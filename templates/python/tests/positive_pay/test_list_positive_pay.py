from helpers.api import build_positive_pay_api, requires_token, unwrap
from helpers.positive_pay import POSITIVE_PAY_TYPES


@requires_token
def test_lists_positive_pay_rules():
    api = build_positive_pay_api()

    res = api.list_positive_pay_with_http_info(page_limit="20")

    assert res.status_code == 200
    items = res.data.data
    assert isinstance(items, list)
    assert len(items) <= 20
    for item in items:
        rule = unwrap(item)
        assert isinstance(rule.id, str)
        assert rule.type in POSITIVE_PAY_TYPES
        assert rule.attributes is not None
