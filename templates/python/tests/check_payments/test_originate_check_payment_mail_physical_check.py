from helpers.api import requires_token, unwrap
from helpers.check_payments import originate_or_skip
from helpers.shared_account import get_or_create_shared_account


@requires_token
def test_originate_check_payment_mail_physical_check():
    shared = get_or_create_shared_account()
    created = originate_or_skip(shared["account_id"], shared["customer_id"])
    if created is None:
        return

    assert created.status_code == 201
    data = unwrap(created.data.data)
    assert data.type == "checkPayment"
    assert isinstance(data.id, str)
    assert data.attributes is not None
    assert data.attributes.status is not None
