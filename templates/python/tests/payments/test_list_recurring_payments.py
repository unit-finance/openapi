from helpers.api import build_payments_api, requires_token, unwrap
from helpers.shared_account import get_or_create_shared_account


@requires_token
def test_lists_recurring_payments():
    api = build_payments_api()
    shared = get_or_create_shared_account()
    res = api.list_recurring_payments_with_http_info(
        filter_account_id=shared["account_id"],
        page_limit="20",
    )

    assert res.status_code == 200
    items = res.data.data
    assert isinstance(items, list)
    assert len(items) <= 20
    for raw in items:
        item = unwrap(raw)
        assert item.type in (
            "recurringCreditAchPayment",
            "recurringDebitAchPayment",
            "recurringCreditBookPayment",
        )
        assert isinstance(item.id, str)
