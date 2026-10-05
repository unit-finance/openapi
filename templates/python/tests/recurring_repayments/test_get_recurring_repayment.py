from helpers.api import build_recurring_repayments_api, requires_token, unwrap
from helpers.repayments import RECURRING_REPAYMENT_TYPES, get_recurring_repayment_id


@requires_token
def test_fetches_a_recurring_repayment_by_id():
    recurring_id = get_recurring_repayment_id()
    if recurring_id is None:
        return

    res = build_recurring_repayments_api().get_recurring_repayment_with_http_info(
        recurring_id
    )

    assert res.status_code == 200
    recurring = unwrap(res.data.data)
    assert recurring.id == recurring_id
    assert recurring.type in RECURRING_REPAYMENT_TYPES
    assert recurring.attributes is not None
