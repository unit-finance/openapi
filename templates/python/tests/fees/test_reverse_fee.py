from helpers.api import build_fees_api, requires_token, unwrap
from helpers.fixtures import build_create_fee_request, build_reverse_fee_request
from helpers.funding import fund_account
from helpers.shared_account import get_or_create_shared_account


@requires_token
def test_reverses_a_fee():
    api = build_fees_api()
    shared = get_or_create_shared_account()
    fund_account(shared["account_id"], 1000)

    created = api.create_fee_with_http_info(
        build_create_fee_request(shared["account_id"])
    )
    assert created.status_code == 201
    fee_id = unwrap(created.data.data).id

    res = api.reverse_fee_with_http_info(
        build_reverse_fee_request(shared["account_id"], fee_id)
    )

    assert res.status_code == 201
    data = unwrap(res.data.data)
    assert data.type == "feeReversal"
    assert isinstance(data.id, str)
