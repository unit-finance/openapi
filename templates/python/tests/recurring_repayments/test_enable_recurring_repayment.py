from helpers.api import build_recurring_repayments_api, requires_token, unwrap
from helpers.repayments import (
    RECURRING_REPAYMENT_TYPES,
    create_recurring_repayment_or_skip,
)


@requires_token
def test_re_enables_a_disabled_recurring_repayment():
    recurring = create_recurring_repayment_or_skip()
    if recurring is None:
        return

    # A recurring repayment is created `Active`, and `enable` is only valid from
    # `Disabled`, so this suite disables its own schedule first rather than
    # sharing one with the disable suite.
    api = build_recurring_repayments_api()
    api.disable_recurring_repayment_with_http_info(recurring.id, body={})

    res = api.enable_recurring_repayment_with_http_info(recurring.id, body={})

    assert res.status_code == 200
    enabled = unwrap(res.data.data)
    assert enabled.id == recurring.id
    assert enabled.type in RECURRING_REPAYMENT_TYPES
    assert enabled.attributes is not None
