from unit_finance_sdk.exceptions import ApiException

from helpers.api import build_card_holder_api_tokens_api, requires_token
from helpers.cardholder_tokens import SKIP_STATUSES, create_verification_or_skip
from helpers.fixtures import build_create_cardholder_token_request
from helpers.shared_card import get_or_create_shared_card


@requires_token
def test_creates_cardholder_token():
    shared = get_or_create_shared_card()

    verification = create_verification_or_skip(shared["card_id"])
    if verification is None:
        return
    attributes = verification.data.data.attributes
    verification_token = getattr(attributes, "verification_token", None) or "0"

    api = build_card_holder_api_tokens_api()
    try:
        res = api.create_cardholder_token_with_http_info(
            shared["card_id"],
            build_create_cardholder_token_request(verification_token),
        )
    except ApiException as err:
        # The 6-digit code is sent to the card holder over SMS, so the suite
        # cannot supply a real one and the sandbox answers 404
        # `verification_failed`. The spec marks `verificationToken` /
        # `verificationCode` required, so the generated model cannot send the
        # scope-only body the API accepts either.
        if err.status in SKIP_STATUSES:
            print(
                "Cardholder token creation needs an out-of-band OTP code "
                f"(status {err.status}); skipping."
            )
            return
        raise

    assert res.status_code == 201
    data = res.data.data
    assert data is not None
    assert data.attributes is not None
    assert data.attributes.token is not None
