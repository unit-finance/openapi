from helpers.api import requires_token
from helpers.cardholder_tokens import create_verification_or_skip
from helpers.shared_card import get_or_create_shared_card


@requires_token
def test_creates_cardholder_token_verification():
    shared = get_or_create_shared_card()

    res = create_verification_or_skip(shared["card_id"])
    if res is None:
        return

    assert res.status_code == 201
    data = res.data.data
    assert data is not None
    assert data.type == "cardholderTokenVerification"
