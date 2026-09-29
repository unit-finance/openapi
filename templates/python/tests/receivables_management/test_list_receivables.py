from helpers.api import requires_token
from helpers.receivables import list_receivables_raw, receivable_items


@requires_token
def test_lists_receivables():
    # Read the raw body: the spec's `Receivable` requires attribute keys the
    # sandbox does not send, so the typed call raises. See
    # `helpers.receivables.list_receivables_raw`.
    res = list_receivables_raw(page_limit="20")

    assert res["status"] == 200
    items = receivable_items(res["body"])
    assert isinstance(items, list)
    assert len(items) <= 20
    for receivable in items:
        assert isinstance(receivable["id"], str)
        assert receivable["type"] == "bankReceivable"
        assert receivable["attributes"] is not None
