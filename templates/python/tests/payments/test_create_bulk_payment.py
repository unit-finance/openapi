from helpers.api import build_payments_api, requires_token, unwrap
from helpers.fixtures import build_create_bulk_payment_request
from helpers.shared_account import get_or_create_shared_account


@requires_token
def test_creates_a_bulk_payment():
    api = build_payments_api()
    shared = get_or_create_shared_account()
    res = api.create_bulk_payment_with_http_info(
        build_create_bulk_payment_request(
            shared["account_id"],
            shared["counterparty_account_id"],
        )
    )

    assert res.status_code == 201
    data = unwrap(res.data.data)
    assert isinstance(data.type, str)
    assert data.attributes is not None
