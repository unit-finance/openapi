from helpers.api import build_transactions_api, requires_token, unwrap
from helpers.fixtures import build_update_transaction_tags_request
from helpers.shared_transaction import get_or_create_shared_transaction


@requires_token
def test_updates_transaction_tags():
    api = build_transactions_api()
    shared = get_or_create_shared_transaction()

    res = api.update_transaction_tags_with_http_info(
        shared["account_id"],
        shared["transaction_id"],
        build_update_transaction_tags_request(),
    )

    assert res.status_code == 200
    data = unwrap(res.data.data)
    assert isinstance(data.type, str)
    assert data.id == shared["transaction_id"]
    assert data.attributes is not None
