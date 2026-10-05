import json

from helpers.api import build_stop_payments_api, requires_token
from helpers.stop_payments import CHECK_STOP_PAYMENT_TYPE, create_check_stop_payment_id


@requires_token
def test_disables_a_stop_payment():
    stop_payment_id = create_check_stop_payment_id()

    # Raw body: the generated `CheckStopPayment` model pins `type` to the spec's
    # `checkStopPayment`, which the sandbox does not send. See `stop_payments.py`.
    response = build_stop_payments_api().disable_stop_payment_without_preload_content(
        stop_payment_id, body={}
    )
    body = json.loads(response.read())

    assert response.status == 200
    stop_payment = body["data"]
    assert stop_payment["id"] == stop_payment_id
    assert stop_payment["type"] == CHECK_STOP_PAYMENT_TYPE
    assert stop_payment["attributes"] is not None
