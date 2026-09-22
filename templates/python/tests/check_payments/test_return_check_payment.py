from helpers.api import requires_token, unwrap
from helpers.check_payments import get_or_create_shared_check_payment, return_or_skip


@requires_token
def test_return_check_payment():
    shared = get_or_create_shared_check_payment()
    if shared is None:
        return
    returned = return_or_skip(shared.id)
    if returned is None:
        return

    assert returned.status_code == 200
    data = unwrap(returned.data.data)
    assert data.type == "checkPayment"
    assert data.id == shared.id
    assert data.attributes is not None
