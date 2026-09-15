from helpers.api import build_counterparties_api, requires_token, unwrap
from helpers.counterparties import create_dedicated_counterparty
from helpers.fixtures import build_update_counterparty_request


@requires_token
def test_updates_counterparty_tags():
    api = build_counterparties_api()
    counterparty = create_dedicated_counterparty()

    res = api.update_counterparty_with_http_info(
        counterparty.id, build_update_counterparty_request()
    )

    assert res.status_code in (200, 201)
    data = unwrap(res.data.data)
    assert data.id == counterparty.id
    assert data.type == "achCounterparty"
    assert data.attributes is not None
