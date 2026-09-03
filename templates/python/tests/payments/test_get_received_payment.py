from helpers.api import build_payments_api, requires_token, unwrap


@requires_token
def test_returns_a_received_payment_when_one_exists():
    api = build_payments_api()
    listed = api.list_received_payments_with_http_info(page_limit="1")
    assert listed.status_code == 200
    if not listed.data.data:
        # Sandbox may have no received payments; structural skip is acceptable.
        return
    received_id = listed.data.data[0].id
    res = api.get_received_payment_with_http_info(received_id)

    assert res.status_code == 200
    data = unwrap(res.data.data)
    assert data.id == received_id
    assert isinstance(data.type, str)
