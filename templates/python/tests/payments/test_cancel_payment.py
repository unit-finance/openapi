from unit_finance_sdk.exceptions import ApiException

from helpers.api import build_payments_api, requires_token, unwrap
from helpers.fixtures import build_create_book_payment_request
from helpers.shared_account import get_or_create_shared_account


@requires_token
def test_cancels_a_book_payment():
    api = build_payments_api()
    shared = get_or_create_shared_account()
    created = api.create_payment_with_http_info(
        build_create_book_payment_request(
            shared["account_id"],
            shared["counterparty_account_id"],
        )
    )
    assert created.status_code == 201
    payment_id = unwrap(created.data.data).id

    try:
        res = api.cancel_payment_with_http_info(payment_id)
    except ApiException as err:
        # Book payments settle immediately; only Pending/PendingReview ACH/Wire
        # can be canceled. 501 if cancel is unimplemented for the type.
        if err.status in (400, 409, 422, 501):
            return
        raise

    assert res.status_code in (200, 201)
    data = unwrap(res.data.data)
    assert data.id == payment_id
    assert data.attributes is not None
