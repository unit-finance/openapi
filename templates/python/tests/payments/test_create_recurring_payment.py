import pytest

from helpers.api import build_payments_api, requires_token, unwrap
from helpers.fixtures import build_create_recurring_book_payment_request
from helpers.shared_account import get_or_create_shared_account


# TODO: Re-enable once the payment-related spec/docs fixes land. The request now
# succeeds, but the recurring-payment response fails to deserialize:
# RecurringCreditBookPaymentAttributes.transactionSummaryOverride is a required
# string, yet the API returns null. Blocked on an upstream spec fix marking it
# optional/nullable.
@pytest.mark.skip(
    reason="Blocked on upstream spec fix: recurring-payment response model."
)
@requires_token
def test_creates_a_recurring_book_payment():
    api = build_payments_api()
    shared = get_or_create_shared_account()
    res = api.create_recurring_payment_with_http_info(
        build_create_recurring_book_payment_request(
            shared["account_id"],
            shared["counterparty_account_id"],
        )
    )

    assert res.status_code == 201
    data = unwrap(res.data.data)
    assert data.type == "recurringBookPayment"
    assert isinstance(data.id, str)
    assert data.attributes is not None
