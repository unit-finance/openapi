from helpers.api import build_recurring_repayments_api, requires_token, unwrap
from helpers.repayments import (
    RECURRING_REPAYMENT_TYPES,
    create_recurring_repayment_or_skip,
)


@requires_token
def test_disables_a_recurring_repayment():
    recurring = create_recurring_repayment_or_skip()
    if recurring is None:
        return

    res = build_recurring_repayments_api().disable_recurring_repayment_with_http_info(
        recurring.id, body={}
    )

    assert res.status_code == 200
    disabled = unwrap(res.data.data)
    assert disabled.id == recurring.id
    assert disabled.type in RECURRING_REPAYMENT_TYPES
    assert disabled.attributes is not None
