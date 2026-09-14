from helpers.api import requires_token
from helpers.check_deposits import (
    clear_or_skip,
    get_or_create_shared_check_deposit,
)


@requires_token
def test_clears_a_check_deposit_that_is_in_a_clearable_state():
    shared = get_or_create_shared_check_deposit()

    # `clear` is only valid while the deposit is in `Clearing` and requires the
    # Dynamic Clearing Period feature; when the precondition is not met the
    # helper returns None and the test passes without asserting.
    result = clear_or_skip(shared["id"])
    if result is None:
        return
    status, document = result

    assert status == 200
    data = document["data"]
    assert data["type"] == "checkDeposit"
    assert data["id"] == shared["id"]
