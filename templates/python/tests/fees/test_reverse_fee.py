from helpers.api import build_fees_api, requires_token, unwrap
from helpers.fixtures import build_create_fee_request, build_reverse_fee_request
from helpers.shared_account import get_or_create_shared_account_context


@requires_token
def test_reverses_a_fee():
    ctx = get_or_create_shared_account_context()
    api = build_fees_api()
    created = api.create_fee_with_http_info(build_create_fee_request(ctx["account_id"]))
    assert created.status_code == 201
    fee = unwrap(created.data.data)
    relationships = getattr(fee, "relationships", None)
    account_rel = getattr(relationships, "account", None)
    account_data = getattr(account_rel, "data", None)
    account_id = getattr(account_data, "id", None) or ctx["account_id"]
    transaction_rel = getattr(relationships, "transaction", None)
    transaction_data = getattr(transaction_rel, "data", None)
    transaction_id = getattr(transaction_data, "id", None)
    assert transaction_id is not None

    res = api.reverse_fee_with_http_info(
        build_reverse_fee_request(account_id, transaction_id)
    )

    assert res.status_code == 201
    data = unwrap(res.data.data)
    assert data.type == "feeReversal"
    assert isinstance(data.id, str)
