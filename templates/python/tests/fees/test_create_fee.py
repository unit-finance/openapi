from helpers.api import build_fees_api, requires_token, unwrap
from helpers.fixtures import build_create_fee_request
from helpers.shared_account import get_or_create_shared_account_context


@requires_token
def test_creates_a_fee_for_a_deposit_account():
    ctx = get_or_create_shared_account_context()
    api = build_fees_api()
    res = api.create_fee_with_http_info(build_create_fee_request(ctx["account_id"]))

    assert res.status_code == 201
    data = unwrap(res.data.data)
    assert data.type == "fee"
    assert isinstance(data.id, str)
    assert data.attributes is not None
    assert data.attributes.amount is not None
