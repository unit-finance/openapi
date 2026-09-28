from helpers.api import build_positive_pay_api, requires_token, unwrap
from helpers.positive_pay import create_check_payment_positive_pay_id


@requires_token
def test_gets_a_positive_pay_rule_by_id():
    api = build_positive_pay_api()
    positive_pay_id = create_check_payment_positive_pay_id()

    res = api.get_positive_pay_by_id_with_http_info(positive_pay_id)

    assert res.status_code == 200
    rule = unwrap(res.data.data)
    assert rule.id == positive_pay_id
    assert rule.type == "checkPaymentPositivePay"
    assert rule.attributes is not None
    assert isinstance(rule.attributes.status, str)
