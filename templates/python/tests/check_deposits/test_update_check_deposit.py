from helpers.api import build_check_deposits_api, requires_token
from helpers.check_deposits import get_or_create_shared_check_deposit, read_json
from helpers.fixtures import build_update_check_deposit_request


@requires_token
def test_updates_a_check_deposits_tags():
    shared = get_or_create_shared_check_deposit()
    api = build_check_deposits_api()

    status, document = read_json(
        api.update_check_deposit_without_preload_content(
            shared["id"], build_update_check_deposit_request()
        )
    )

    assert status == 200
    data = document["data"]
    assert data["type"] == "checkDeposit"
    assert data["id"] == shared["id"]
    assert "attributes" in data
