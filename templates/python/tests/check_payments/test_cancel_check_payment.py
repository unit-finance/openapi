from helpers.api import requires_token, unwrap
from helpers.check_payments import cancel_or_skip, originate_or_skip
from helpers.shared_account import get_or_create_shared_account


@requires_token
def test_cancel_check_payment():
    shared = get_or_create_shared_account()
    created = originate_or_skip(shared["account_id"], shared["customer_id"])
    if created is None:
        return
    payment = unwrap(created.data.data)

    canceled = cancel_or_skip(payment.id)
    if canceled is None:
        return

    assert canceled.status_code == 200
    data = unwrap(canceled.data.data)
    assert data.type == "checkPayment"
    assert data.id == payment.id
    assert data.attributes is not None
