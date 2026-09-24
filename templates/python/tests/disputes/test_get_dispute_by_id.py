from helpers.api import build_disputes_api, requires_token, unwrap
from helpers.disputes import get_first_dispute_id_or_skip


@requires_token
def test_gets_a_dispute_by_id():
    api = build_disputes_api()
    dispute_id = get_first_dispute_id_or_skip()
    if dispute_id is None:
        return

    res = api.get_dispute_by_id_with_http_info(dispute_id)

    assert res.status_code == 200
    dispute = unwrap(res.data.data)
    assert dispute.id == dispute_id
    assert dispute.type == "dispute"
    assert isinstance(dispute.attributes.status, str)
