from helpers.api import build_positive_pay_api, requires_token, unwrap
from helpers.fixtures import (
    build_create_check_payment_positive_pay_request,
    build_create_received_ach_debit_positive_pay_request,
    build_create_wire_drawdown_positive_pay_request,
)
from helpers.shared_account import get_or_create_shared_account


@requires_token
def test_creates_a_check_payment_rule():
    api = build_positive_pay_api()
    account_id = get_or_create_shared_account()["account_id"]

    res = api.create_positive_pay_with_http_info(
        build_create_check_payment_positive_pay_request(account_id)
    )

    assert res.status_code == 201
    rule = unwrap(res.data.data)
    assert rule.type == "checkPaymentPositivePay"
    assert isinstance(rule.id, str)
    assert rule.attributes is not None


@requires_token
def test_creates_a_received_ach_debit_rule():
    api = build_positive_pay_api()
    account_id = get_or_create_shared_account()["account_id"]

    res = api.create_positive_pay_with_http_info(
        build_create_received_ach_debit_positive_pay_request(account_id)
    )

    assert res.status_code == 201
    rule = unwrap(res.data.data)
    assert rule.type == "receivedAchDebitPositivePay"
    assert isinstance(rule.id, str)


@requires_token
def test_creates_a_wire_drawdown_rule():
    api = build_positive_pay_api()
    account_id = get_or_create_shared_account()["account_id"]

    res = api.create_positive_pay_with_http_info(
        build_create_wire_drawdown_positive_pay_request(account_id)
    )

    assert res.status_code == 201
    rule = unwrap(res.data.data)
    assert rule.type == "drawdownPositivePay"
    assert isinstance(rule.id, str)
