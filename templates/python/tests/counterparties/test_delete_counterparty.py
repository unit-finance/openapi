from helpers.api import build_counterparties_api, requires_token
from helpers.counterparties import create_dedicated_counterparty


@requires_token
def test_deletes_a_counterparty():
    api = build_counterparties_api()
    counterparty = create_dedicated_counterparty()

    res = api.delete_counterparty_with_http_info(counterparty.id)

    # The spec documents 204 for DELETE /counterparties/{id}; the sandbox
    # answers 200 with an empty body.
    assert res.status_code in (200, 204)
