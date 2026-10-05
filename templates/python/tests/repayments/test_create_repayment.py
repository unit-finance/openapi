from helpers.api import requires_token
from helpers.repayments import REPAYMENT_TYPES, create_book_repayment_or_skip


@requires_token
def test_creates_a_book_repayment_against_a_credit_account():
    repayment = create_book_repayment_or_skip()
    if repayment is None:
        return

    assert repayment.type in REPAYMENT_TYPES
    assert isinstance(repayment.id, str)
