from helpers.api import build_cards_api, requires_token, unwrap
from helpers.fixtures import build_freeze_card_request
from helpers.shared_card import create_dedicated_card


@requires_token
def test_freezes_then_unfreezes_a_card():
    card = create_dedicated_card()
    api = build_cards_api()
    frozen = api.freeze_card_with_http_info(
        card["card_id"], build_freeze_card_request()
    )
    assert frozen.status_code in (200, 201)

    res = api.unfreeze_card_with_http_info(card["card_id"])

    assert res.status_code in (200, 201)
    data = unwrap(res.data.data)
    assert data.id == card["card_id"]
    assert isinstance(data.type, str)
    assert data.attributes is not None
