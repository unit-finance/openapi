from helpers.api import build_daca_api, requires_token, unwrap
from helpers.daca import create_account_in_daca_state
from helpers.fixtures import build_update_daca_policies_request


@requires_token
def test_enters_a_control_agreement():
    api = build_daca_api()
    account_id = create_account_in_daca_state("none")

    res = api.enter_control_agreement_with_http_info(
        account_id,
        build_update_daca_policies_request(account_id),
    )

    assert res.status_code == 200
    data = unwrap(res.data.data)
    assert data.id == account_id
    assert data.type == "depositAccount"
    assert data.attributes is not None
