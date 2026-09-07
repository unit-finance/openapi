from helpers.api import build_cards_api, requires_token, unwrap
from helpers.shared_card import create_dedicated_virtual_card


@requires_token
def test_reports_a_card_as_stolen():
    card = create_dedicated_virtual_card()
    api = build_cards_api()
    res = api.report_card_stolen_with_http_info(card["card_id"])

    assert res.status_code in (200, 201)
    data = unwrap(res.data.data)
    assert data.id == card["card_id"]
    assert isinstance(data.type, str)
    assert data.attributes is not None
