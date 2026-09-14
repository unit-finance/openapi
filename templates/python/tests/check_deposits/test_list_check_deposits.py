from helpers.api import build_check_deposits_api, requires_token
from helpers.check_deposits import get_or_create_shared_check_deposit, read_json


@requires_token
def test_returns_a_json_api_list_with_page_limit_10():
    get_or_create_shared_check_deposit()
    api = build_check_deposits_api()

    status, document = read_json(
        api.list_check_deposits_without_preload_content(page_limit="10")
    )

    assert status == 200
    assert isinstance(document["data"], list)
    assert len(document["data"]) <= 10
    for check_deposit in document["data"]:
        assert check_deposit["type"] == "checkDeposit"
        assert isinstance(check_deposit["id"], str)
