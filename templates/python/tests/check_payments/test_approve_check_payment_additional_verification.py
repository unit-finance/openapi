from helpers.api import requires_token, unwrap
from helpers.check_payments import (
    approve_or_skip,
    get_or_create_shared_check_payment,
)


@requires_token
def test_approve_check_payment_additional_verification():
    shared = get_or_create_shared_check_payment()
    if shared is None:
        return
    approved = approve_or_skip(shared.id)
    if approved is None:
        return

    assert approved.status_code == 200
    data = unwrap(approved.data.data)
    assert data.type == "checkPayment"
    assert data.id == shared.id
    assert data.attributes is not None
