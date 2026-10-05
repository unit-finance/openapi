from helpers.api import build_stop_payments_api, requires_token, unwrap
from helpers.fixtures import build_create_ach_stop_payment_request
from helpers.shared_account import get_or_create_shared_account
from helpers.stop_payments import CHECK_STOP_PAYMENT_TYPE, create_check_stop_payment_raw


@requires_token
def test_creates_a_check_stop_payment():
    stop_payment = create_check_stop_payment_raw()

    assert stop_payment["type"] == CHECK_STOP_PAYMENT_TYPE
    assert isinstance(stop_payment["id"], str)
    assert stop_payment["attributes"] is not None


@requires_token
def test_creates_an_ach_stop_payment():
    api = build_stop_payments_api()
    account_id = get_or_create_shared_account()["account_id"]

    res = api.create_stop_payment_with_http_info(
        build_create_ach_stop_payment_request(account_id)
    )

    assert res.status_code == 201
    stop_payment = unwrap(res.data.data)
    assert stop_payment.type == "achStopPayment"
    assert isinstance(stop_payment.id, str)
