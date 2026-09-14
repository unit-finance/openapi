from helpers.api import build_check_deposits_api, requires_token
from helpers.check_deposits import get_or_create_shared_check_deposit, read_json


@requires_token
def test_gets_a_check_deposit_by_id():
    shared = get_or_create_shared_check_deposit()
    api = build_check_deposits_api()

    status, document = read_json(
        api.get_check_deposit_without_preload_content(shared["id"])
    )

    assert status == 200
    data = document["data"]
    assert data["type"] == "checkDeposit"
    assert data["id"] == shared["id"]
    assert "attributes" in data
    assert "status" in data["attributes"]
