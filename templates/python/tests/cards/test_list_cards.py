from helpers.api import build_cards_api, requires_token, unwrap
from helpers.shared_card import get_or_create_shared_card


@requires_token
def test_lists_cards_with_page_limit():
    get_or_create_shared_card()
    api = build_cards_api()
    res = api.list_cards_with_http_info(page_limit="20")

    assert res.status_code == 200
    items = res.data.data
    assert isinstance(items, list)
    assert len(items) <= 20
    for raw in items:
        item = unwrap(raw)
        assert isinstance(item.type, str)
        assert isinstance(item.id, str)
