from helpers.api import build_disputes_api, requires_token, unwrap


@requires_token
def test_lists_disputes():
    api = build_disputes_api()

    res = api.list_disputes_with_http_info(page_limit="20")

    assert res.status_code == 200
    items = res.data.data
    assert isinstance(items, list)
    assert len(items) <= 20
    for item in items:
        dispute = unwrap(item)
        assert isinstance(dispute.id, str)
        assert dispute.type == "dispute"
        assert dispute.attributes is not None
