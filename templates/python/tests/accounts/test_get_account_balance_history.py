from helpers.api import build_accounts_api, requires_token
from helpers.shared_account import get_or_create_shared_account_context


@requires_token
def test_lists_end_of_day_balances_for_an_account():
    ctx = get_or_create_shared_account_context()
    api = build_accounts_api()
    res = api.get_account_balance_history_with_http_info(
        filter_account_id=ctx["account_id"],
        page_limit="20",
    )

    assert res.status_code == 200
    assert isinstance(res.data.data, list)
    assert len(res.data.data) <= 20
