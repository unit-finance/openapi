from helpers.api import build_counterparties_api, requires_token, unwrap
from helpers.counterparties import get_or_create_shared_counterparty


@requires_token
def test_gets_a_counterparty_by_id():
    api = build_counterparties_api()
    counterparty = get_or_create_shared_counterparty()

    res = api.get_counterparty_with_http_info(counterparty.id)

    assert res.status_code == 200
    data = unwrap(res.data.data)
    assert data.id == counterparty.id
    assert data.type == "achCounterparty"
    assert data.attributes is not None
    assert data.attributes.account_number is not None
