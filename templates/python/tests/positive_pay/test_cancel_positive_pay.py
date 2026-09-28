import json

from helpers.api import build_positive_pay_api, requires_token
from helpers.positive_pay import create_check_payment_positive_pay_id


@requires_token
def test_cancels_a_positive_pay_rule():
    api = build_positive_pay_api()
    positive_pay_id = create_check_payment_positive_pay_id()

    # The spec documents 200 for this operation but the sandbox answers 201,
    # and the generated client only maps a body for 200 — the typed call
    # returns `data=None`. Read the raw body instead. The spec also declares
    # the cancel body as an optional untyped `object`; the sandbox accepts an
    # empty one. Tracked in SLICES.md.
    response = api.cancel_positive_pay_without_preload_content(
        positive_pay_id, body={}
    )
    body = json.loads(response.read())

    assert response.status == 201
    rule = body["data"]
    assert rule["id"] == positive_pay_id
    assert rule["type"] == "checkPaymentPositivePay"
    assert isinstance(rule["attributes"]["status"], str)
