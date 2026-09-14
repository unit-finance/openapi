from helpers.api import build_check_deposits_api, requires_token
from helpers.check_deposits import get_or_create_shared_check_deposit


@requires_token
def test_gets_the_check_deposit_back_image():
    shared = get_or_create_shared_check_deposit()
    api = build_check_deposits_api()

    # The image endpoints return an `image/jpeg` body (bytes), not the
    # CheckDeposit model, so the typed call is unaffected by the amount drift.
    res = api.get_check_deposit_back_image_with_http_info(shared["id"])

    assert res.status_code == 200
    assert res.data is not None
