from helpers.api import build_cards_api, requires_token, unwrap
from helpers.shared_card import get_or_create_shared_card


@requires_token
def test_gets_a_card_by_id():
    shared = get_or_create_shared_card()
    api = build_cards_api()
    res = api.get_card_with_http_info(shared["card_id"])

    assert res.status_code == 200
    data = unwrap(res.data.data)
    assert data.id == shared["card_id"]
    assert isinstance(data.type, str)
    assert data.attributes is not None
