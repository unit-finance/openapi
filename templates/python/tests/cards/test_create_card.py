from helpers.api import build_cards_api, requires_token, unwrap
from helpers.fixtures import build_create_business_debit_card_request
from helpers.shared_account import get_or_create_shared_account


@requires_token
def test_creates_a_business_debit_card():
    api = build_cards_api()
    shared = get_or_create_shared_account()
    res = api.create_card_with_http_info(
        build_create_business_debit_card_request(shared["account_id"])
    )

    assert res.status_code == 201
    data = unwrap(res.data.data)
    assert data.type == "businessDebitCard"
    assert isinstance(data.id, str)
    assert data.attributes is not None
