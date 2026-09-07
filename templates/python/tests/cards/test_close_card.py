from helpers.api import build_cards_api, requires_token, unwrap
from helpers.shared_card import create_dedicated_card


@requires_token
def test_closes_a_card():
    card = create_dedicated_card()
    api = build_cards_api()
    res = api.close_card_with_http_info(card["card_id"])

    assert res.status_code in (200, 201)
    data = unwrap(res.data.data)
    assert data.id == card["card_id"]
    assert isinstance(data.type, str)
    assert data.attributes is not None
