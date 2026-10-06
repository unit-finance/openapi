import json

from helpers.api import build_stop_payments_api, requires_token
from helpers.stop_payments import STOP_PAYMENT_TYPES


@requires_token
def test_returns_a_json_api_list_with_page_limit_20():
    # Raw body: the generated `CheckStopPayment` model pins `type` to the spec's
    # `checkStopPayment`, which the sandbox does not send. See `stop_payments.py`.
    response = build_stop_payments_api().list_stop_payments_without_preload_content(
        page_limit="20"
    )
    body = json.loads(response.read())

    assert response.status == 200
    stop_payments = body["data"]
    assert isinstance(stop_payments, list)
    assert len(stop_payments) <= 20
    for stop_payment in stop_payments:
        assert isinstance(stop_payment["id"], str)
        assert stop_payment["type"] in STOP_PAYMENT_TYPES
        assert stop_payment["attributes"] is not None
