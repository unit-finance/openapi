from helpers.api import build_transactions_api, requires_token, unwrap
from helpers.shared_transaction import get_or_create_shared_transaction


@requires_token
def test_lists_transactions_for_an_account():
    api = build_transactions_api()
    shared = get_or_create_shared_transaction()

    # Scope to Book transactions: the sandbox funds the shared account with an
    # ATM-deposit simulation whose `atmTransaction` omits `tags`, which the
    # generated strict models reject on deserialization. Filtering to a type
    # whose responses carry `tags` keeps the assertion on listTransactions.
    res = api.list_transactions_with_http_info(
        filter_account_id=shared["account_id"],
        filter_type="Book",
        page_limit="20",
    )

    assert res.status_code == 200
    items = res.data.data
    assert isinstance(items, list)
    assert len(items) <= 20
    for item in items:
        tx = unwrap(item)
        assert isinstance(tx.type, str)
        assert isinstance(tx.id, str)
        assert tx.attributes is not None
