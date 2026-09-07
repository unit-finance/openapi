from helpers.api import build_cards_api, requires_token
from helpers.shared_card import get_or_create_shared_card


@requires_token
def test_gets_card_pin_status():
    shared = get_or_create_shared_card()
    api = build_cards_api()
    res = api.get_card_pin_status_with_http_info(shared["card_id"])

    assert res.status_code == 200
    data = res.data.data
    assert data is not None
    assert data.type is not None
