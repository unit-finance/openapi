import json

from helpers.api import build_interest_api, requires_token
from helpers.receivables import accrued_interest_window


@requires_token
def test_totals_accrued_interest_over_a_window():
    api = build_interest_api()
    since, until = accrued_interest_window()

    # The spec types ``data`` as a bare ``{ amount }`` object, but the sandbox
    # answers with a full JSON:API resource (``type``/``attributes.amount``).
    # Pydantic then rejects the body for a missing required ``amount``, so the
    # typed call cannot complete — read the raw body instead. Tracked in
    # SLICES.md as a spec defect owned by ``unit-openapi``.
    response = api.get_total_accrued_interest_without_preload_content(
        filter_since=since,
        filter_until=until,
    )
    body = json.loads(response.read())

    assert response.status == 200
    resource = body["data"]
    assert resource["type"] == "totalAccruedInterest"
    assert isinstance(resource["attributes"]["amount"], int)
