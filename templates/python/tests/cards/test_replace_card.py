from helpers.api import build_cards_api, requires_token, unwrap
from helpers.fixtures import build_replace_card_request
from helpers.shared_card import create_dedicated_card


@requires_token
def test_replaces_a_physical_card():
    card = create_dedicated_card()
    api = build_cards_api()
    res = api.replace_card_with_http_info(card["card_id"], build_replace_card_request())

    assert res.status_code in (200, 201)
    data = unwrap(res.data.data)
    assert isinstance(data.id, str)
    assert isinstance(data.type, str)
    assert data.attributes is not None
