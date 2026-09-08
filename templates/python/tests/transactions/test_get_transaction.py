from helpers.api import build_transactions_api, requires_token, unwrap
from helpers.shared_transaction import get_or_create_shared_transaction


@requires_token
def test_gets_a_transaction_by_account_and_transaction_id():
    api = build_transactions_api()
    shared = get_or_create_shared_transaction()

    res = api.get_transaction_with_http_info(
        shared["account_id"],
        shared["transaction_id"],
    )

    assert res.status_code == 200
    data = unwrap(res.data.data)
    assert isinstance(data.type, str)
    assert data.id == shared["transaction_id"]
    assert data.attributes is not None
