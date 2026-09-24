from helpers.api import requires_token
from helpers.credit import envelope_of, list_credit_decisions_or_skip


@requires_token
def test_lists_credit_decisions():
    items = list_credit_decisions_or_skip()
    if items is None:
        return

    assert isinstance(items, list)
    assert len(items) <= 20
    for item in items:
        envelope = envelope_of(item)
        assert isinstance(envelope["id"], str)
        assert envelope["type"] is not None
        assert envelope["attributes"] is not None
