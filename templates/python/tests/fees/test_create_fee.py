from helpers.api import build_fees_api, get_sandbox_deposit_account_id, requires_token
from helpers.fixtures import build_create_fee_request


@requires_token
def test_creates_a_fee_on_a_deposit_account():
    api = build_fees_api()
    account_id = get_sandbox_deposit_account_id()

    res = api.create_fee_with_http_info(build_create_fee_request(account_id))

    assert res.status_code == 201
    data = res.data.data
    assert data.type == "fee"
    assert isinstance(data.id, str)
    assert data.attributes is not None
    assert data.attributes.amount is not None
    assert data.attributes.description is not None
