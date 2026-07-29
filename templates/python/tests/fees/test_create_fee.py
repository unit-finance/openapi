from helpers.api import build_fees_api, requires_token, unwrap
from helpers.fixtures import build_create_fee_request
from helpers.shared_account import get_or_create_shared_deposit_account


@requires_token
def test_create_fee_creates_a_fee_on_a_deposit_account():
    api = build_fees_api()
    account = get_or_create_shared_deposit_account()

    res = api.create_fee_with_http_info(build_create_fee_request(account["id"]))

    assert res.status_code == 201
    fee = unwrap(res.data.data)
    assert fee.type == "fee"
    assert isinstance(fee.id, str)
    assert fee.attributes is not None
    assert fee.attributes.amount is not None
    assert fee.attributes.description is not None
