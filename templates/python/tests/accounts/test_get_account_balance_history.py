from helpers.api import build_accounts_api, requires_token, unwrap
from helpers.shared_account import get_or_create_shared_deposit_account


@requires_token
def test_get_account_balance_history_returns_balances_filtered_by_account_id():
    api = build_accounts_api()
    shared = get_or_create_shared_deposit_account()

    res = api.get_account_balance_history_with_http_info(
        page_limit="20", filter_account_id=shared["id"]
    )

    assert res.status_code == 200
    assert isinstance(res.data.data, list)
    assert len(res.data.data) <= 20
    for item in res.data.data:
        balance = unwrap(item)
        assert isinstance(balance.type, str)
        assert isinstance(balance.id, str)
