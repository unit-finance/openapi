from helpers.api import build_fees_api, requires_token, unwrap
from helpers.fixtures import build_create_fee_request, build_reverse_fee_request
from helpers.shared_account import get_or_create_shared_deposit_account


@requires_token
def test_reverse_fee_reverses_a_fee_on_a_deposit_account():
    api = build_fees_api()
    account = get_or_create_shared_deposit_account()

    fee = api.create_fee_with_http_info(build_create_fee_request(account["id"]))
    assert fee.status_code == 201
    fee_id = unwrap(fee.data.data).id

    res = api.reverse_fee_with_http_info(
        build_reverse_fee_request(account["id"], fee_id)
    )

    assert res.status_code == 201
    reversal = unwrap(res.data.data)
    assert reversal.type == "feeReversal"
    assert isinstance(reversal.id, str)
    assert reversal.attributes is not None
    assert reversal.attributes.description is not None
