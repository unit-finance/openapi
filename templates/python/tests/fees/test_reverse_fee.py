from helpers.api import build_fees_api, get_sandbox_deposit_account_id, requires_token
from helpers.fixtures import build_create_fee_request, build_reverse_fee_request


@requires_token
def test_reverses_a_previously_created_fee():
    api = build_fees_api()
    account_id = get_sandbox_deposit_account_id()

    created = api.create_fee_with_http_info(build_create_fee_request(account_id))
    assert created.status_code == 201
    transaction_id = created.data.data.id

    res = api.reverse_fee_with_http_info(
        build_reverse_fee_request(account_id, transaction_id)
    )

    assert res.status_code == 201
    data = res.data.data
    assert data.type == "feeReversal"
    assert isinstance(data.id, str)
    assert data.attributes is not None
    assert data.attributes.description is not None
