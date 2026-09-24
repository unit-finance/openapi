from helpers.api import (
    VND_API_JSON_HEADERS,
    build_credit_decisions_api,
    requires_token,
)
from helpers.credit import envelope_of, list_credit_decisions_or_skip


@requires_token
def test_gets_credit_decision_by_id():
    # Decisions can only be created against a credit application, which needs a
    # lending program this org may not have; with an empty list there is
    # nothing to GET.
    items = list_credit_decisions_or_skip()
    if not items:
        return
    decision_id = envelope_of(items[0])["id"]
    if not isinstance(decision_id, str):
        return

    api = build_credit_decisions_api()
    res = api.get_credit_decision_with_http_info(
        decision_id, _headers=VND_API_JSON_HEADERS
    )

    assert res.status_code == 200
    envelope = envelope_of(res.data.data)
    assert envelope["id"] == decision_id
    assert envelope["type"] is not None
    assert envelope["attributes"] is not None
