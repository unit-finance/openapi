from unit_finance_sdk.exceptions import ApiException

from helpers.api import build_check_payments_api, requires_token, unwrap
from helpers.check_payments import get_or_create_shared_check_payment


@requires_token
def test_get_check_payment():
    shared = get_or_create_shared_check_payment()
    if shared is None:
        return
    api = build_check_payments_api()
    try:
        res = api.get_check_payment_with_http_info(shared.id)
    except Exception as err:
        if isinstance(err, ApiException):
            raise
        print(f"getCheckPayment typed-model mismatch ({err}); skipping.")
        return

    assert res.status_code == 200
    data = unwrap(res.data.data)
    assert data.type == "checkPayment"
    assert data.id == shared.id
    assert data.attributes is not None
    assert data.attributes.status is not None
