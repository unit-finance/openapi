from helpers.api import requires_token
from helpers.check_payments import get_check_image_or_skip, get_or_create_shared_check_payment


@requires_token
def test_get_check_image():
    shared = get_or_create_shared_check_payment()
    if shared is None:
        return
    image = get_check_image_or_skip(shared.id)
    if image is None:
        return

    assert image.status_code == 200
    assert image.data is not None
