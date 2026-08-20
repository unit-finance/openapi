from helpers.api import build_accounts_api, requires_token, unwrap
from helpers.shared_account import get_or_create_shared_account


@requires_token
def test_gets_account_balance_history():
    api = build_accounts_api()
    shared = get_or_create_shared_account()
    res = api.get_account_balance_history_with_http_info(
        filter_account_id=shared["account_id"],
        page_limit="20",
    )

    assert res.status_code == 200
    items = res.data.data
    assert isinstance(items, list)
    assert len(items) <= 20
    for raw in items:
        item = unwrap(raw)
        assert item.type == "accountEndOfDay"
        assert isinstance(item.id, str)
