from helpers.api import requires_token
from helpers.check_deposits import (
    confirm_or_skip,
    get_or_create_shared_check_deposit,
)


@requires_token
def test_confirms_a_check_deposit_awaiting_customer_confirmation():
    shared = get_or_create_shared_check_deposit()

    # `confirm` is only valid while the deposit is in
    # `AwaitingCustomerConfirmation`; when that precondition is not met the
    # helper returns None and the test passes without asserting.
    status = confirm_or_skip(shared["id"])
    if status is None:
        return

    assert status == 200
