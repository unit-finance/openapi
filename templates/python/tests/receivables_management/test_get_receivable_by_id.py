import json

from helpers.api import build_receivables_management_api, requires_token
from helpers.receivables import get_first_receivable_id_or_skip


@requires_token
def test_gets_a_receivable_by_id():
    api = build_receivables_management_api()
    receivable_id = get_first_receivable_id_or_skip()
    if receivable_id is None:
        return

    # Read the raw body: the spec's `Receivable` requires `originalAmount` /
    # `remainingAmount`, which the sandbox replaces with `totalPrincipal` /
    # `remainingPrincipal`, so pydantic rejects the typed round-trip. Tracked
    # in SLICES.md as a spec defect owned by `unit-openapi`.
    response = api.get_receivable_by_id_without_preload_content(receivable_id)
    body = json.loads(response.read())

    assert response.status == 200
    receivable = body["data"]
    assert receivable["id"] == receivable_id
    assert receivable["type"] == "bankReceivable"
    assert isinstance(receivable["attributes"]["createdAt"], str)
