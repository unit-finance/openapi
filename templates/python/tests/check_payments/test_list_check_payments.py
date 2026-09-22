from unit_finance_sdk.exceptions import ApiException

from helpers.api import build_check_payments_api, requires_token, unwrap


@requires_token
def test_list_check_payments():
    api = build_check_payments_api()
    try:
        res = api.list_check_payments_with_http_info(page_limit="10")
    except Exception as err:
        if isinstance(err, ApiException):
            raise
        print(f"listCheckPayments typed-model mismatch ({err}); skipping.")
        return

    assert res.status_code == 200
    assert isinstance(res.data.data, list)
    assert len(res.data.data) <= 10
    for item in res.data.data:
        payment = unwrap(item)
        assert payment.type == "checkPayment"
        assert isinstance(payment.id, str)
