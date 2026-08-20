import pytest

from helpers.api import build_payments_api, requires_token, unwrap
from helpers.fixtures import build_create_ach_payment_request
from helpers.shared_account import get_or_create_shared_account


@requires_token
def test_clears_an_ach_debit_payment():
    api = build_payments_api()
    shared = get_or_create_shared_account()
    created = api.create_payment_with_http_info(
        build_create_ach_payment_request(shared["account_id"], direction="Debit")
    )
    if created.status_code != 201:
        pytest.skip("Could not create ACH debit payment for clearAchDebitPayment test.")
    payment = unwrap(created.data.data)
    if payment.attributes.status != "Clearing":
        pytest.skip(
            "ACH debit payment is not in Clearing status; Dynamic Clearing Period "
            "may not be enabled in this sandbox."
        )

    res = api.clear_ach_debit_payment_with_http_info(payment.id)

    assert res.status_code == 200
    data = unwrap(res.data.data)
    assert data.id == payment.id
    assert data.type == "achPayment"
