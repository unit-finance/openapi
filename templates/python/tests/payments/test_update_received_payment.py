from helpers.api import build_payments_api, requires_token, unwrap
from helpers.fixtures import build_update_received_payment_request


@requires_token
def test_updates_a_received_payment_when_one_exists():
    api = build_payments_api()
    listed = api.list_received_payments_with_http_info(page_limit="1")
    assert listed.status_code == 200
    if not listed.data.data:
        return
    received_id = listed.data.data[0].id

    res = api.update_received_payment_with_http_info(
        received_id,
        build_update_received_payment_request(),
    )

    assert res.status_code == 200
    data = unwrap(res.data.data)
    assert data.id == received_id
