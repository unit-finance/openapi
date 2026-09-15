from helpers.api import build_counterparties_api, requires_token, unwrap
from helpers.counterparties import (
    get_counterparty_balance_or_skip,
    get_or_create_shared_counterparty,
)


@requires_token
def test_gets_a_counterparty_balance():
    api = build_counterparties_api()
    counterparty = get_or_create_shared_counterparty()

    res = get_counterparty_balance_or_skip(api, counterparty.id)
    if res is None:
        return

    assert res.status_code == 200
    data = unwrap(res.data.data)
    assert data.type == "counterpartyBalance"
    assert isinstance(data.id, str)
    assert data.attributes is not None
    assert isinstance(data.attributes.balance, (int, float))
