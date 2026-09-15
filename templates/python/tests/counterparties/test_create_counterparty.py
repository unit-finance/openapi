from helpers.api import build_counterparties_api, requires_token, unwrap
from helpers.fixtures import build_create_counterparty_request
from helpers.shared_account import get_or_create_shared_account


@requires_token
def test_creates_an_ach_counterparty():
    api = build_counterparties_api()
    shared = get_or_create_shared_account()

    res = api.create_counterparty_with_http_info(
        build_create_counterparty_request(
            shared["customer_id"],
            shared["routing_number"],
            shared["account_number"],
        )
    )

    assert res.status_code == 201
    data = unwrap(res.data.data)
    assert data.type == "achCounterparty"
    assert isinstance(data.id, str)
    assert data.attributes is not None
    assert data.attributes.routing_number == shared["routing_number"]
    assert data.attributes.account_type is not None
    assert data.attributes.permissions is not None
