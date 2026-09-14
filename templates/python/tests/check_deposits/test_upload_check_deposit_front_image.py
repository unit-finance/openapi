from helpers.api import build_check_deposits_api, requires_token
from helpers.check_deposits import JPEG_IMAGE_BYTES, create_check_deposit, read_json


@requires_token
def test_uploads_the_check_deposit_front_image():
    api = build_check_deposits_api()
    created = create_check_deposit()

    status, document = read_json(
        api.upload_check_deposit_front_image_without_preload_content(
            created["id"], JPEG_IMAGE_BYTES
        )
    )

    assert status == 200
    data = document["data"]
    assert data["type"] == "checkDeposit"
    assert data["id"] == created["id"]
    assert "attributes" in data
