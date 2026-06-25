from helpers.api import build_api, requires_token, unwrap
from helpers.fixtures import build_check_registered_agent_address_request


@requires_token
def test_returns_whether_an_address_is_a_registered_agent_address():
    api = build_api()
    res = api.check_registered_agent_address_with_http_info(
        build_check_registered_agent_address_request()
    )

    assert res.status_code == 200
    data = unwrap(res.data.data)
    assert data.type == "checkRegisteredAgentAddress"
    assert isinstance(data.attributes.is_registered_agent_address, bool)
