from helpers.api import build_stop_payments_api, requires_token, unwrap
from helpers.fixtures import build_update_ach_stop_payment_request
from helpers.stop_payments import create_ach_stop_payment_id


@requires_token
def test_updates_the_expiration_and_tags_of_an_ach_stop_payment():
    stop_payment_id = create_ach_stop_payment_id()

    api = build_stop_payments_api()
    res = api.update_ach_stop_payment_with_http_info(
        stop_payment_id, build_update_ach_stop_payment_request()
    )

    assert res.status_code == 200
    stop_payment = unwrap(res.data.data)
    assert stop_payment.id == stop_payment_id
    assert stop_payment.type == "achStopPayment"
    assert stop_payment.attributes is not None
