from helpers.api import requires_token
from helpers.repayments import (
    RECURRING_REPAYMENT_TYPES,
    create_recurring_repayment_or_skip,
)


@requires_token
def test_creates_a_recurring_book_repayment():
    recurring = create_recurring_repayment_or_skip()
    if recurring is None:
        return

    assert recurring.type in RECURRING_REPAYMENT_TYPES
    assert isinstance(recurring.id, str)
