from helpers.api import build_counterparties_api, requires_token, unwrap
from helpers.counterparties import get_or_create_shared_counterparty
from helpers.shared_account import get_or_create_shared_account


@requires_token
def test_lists_counterparties():
    api = build_counterparties_api()
    shared = get_or_create_shared_account()
    # Guarantee at least one counterparty exists, and scope the listing to this
    # run's customer: the org accumulates counterparties whose `bank` is null,
    # which the spec marks required and the strictly-typed client rejects while
    # deserializing the page.
    get_or_create_shared_counterparty()

    res = api.list_counterparties_with_http_info(
        page_limit="20", filter_customer_id=shared["customer_id"]
    )

    assert res.status_code == 200
    items = res.data.data
    assert isinstance(items, list)
    assert len(items) <= 20
    for raw in items:
        item = unwrap(raw)
        assert item.type == "achCounterparty"
        assert isinstance(item.id, str)
        assert item.attributes is not None
