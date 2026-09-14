from helpers.api import build_check_deposits_api, requires_token
from helpers.check_deposits import read_json
from helpers.fixtures import build_create_check_deposit_request
from helpers.shared_account import get_or_create_shared_account


@requires_token
def test_creates_a_check_deposit_on_the_shared_account():
    api = build_check_deposits_api()
    shared = get_or_create_shared_account()

    # Read the raw envelope: the spec types `amount` as a string but the sandbox
    # returns an integer, which pydantic's StrictStr rejects (see
    # helpers/check_deposits.py).
    status, document = read_json(
        api.create_check_deposit_without_preload_content(
            build_create_check_deposit_request(shared["account_id"])
        )
    )

    assert status == 201
    data = document["data"]
    assert data["type"] == "checkDeposit"
    assert isinstance(data["id"], str)
    assert "attributes" in data
    assert "status" in data["attributes"]
