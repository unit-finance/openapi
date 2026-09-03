import time

from helpers.api import TEST_RUN_ID, build_payments_api, requires_token, unwrap


@requires_token
def test_sends_a_drawdown_payment_when_a_wire_drawdown_exists():
    api = build_payments_api()
    listed = api.list_wire_drawdowns_with_http_info(page_limit="1")
    assert listed.status_code == 200
    if not listed.data.data:
        return
    drawdown_id = listed.data.data[0].id

    idempotency_key = (
        f"sdk-python-drawdown-{TEST_RUN_ID}-{int(time.time() * 1000)}"
    )
    res = api.send_drawdown_payment_with_http_info(
        drawdown_id,
        {
            "data": {
                "type": "sendWireDrawdown",
                "attributes": {"idempotencyKey": idempotency_key},
            },
        },
    )

    assert res.status_code == 201
    data = unwrap(res.data.data)
    assert data.type == "wirePayment"
    assert isinstance(data.id, str)
