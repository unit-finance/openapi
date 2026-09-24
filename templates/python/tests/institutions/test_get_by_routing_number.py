from helpers.api import build_institutions_api, requires_token, unwrap
from helpers.shared_account import get_or_create_shared_account


@requires_token
def test_gets_an_institution_by_routing_number():
    api = build_institutions_api()
    routing_number = get_or_create_shared_account()["routing_number"]

    res = api.get_by_routing_number_with_http_info(routing_number)

    assert res.status_code == 200
    institution = unwrap(res.data.data)
    # ``institution`` is keyed by routing number, so the resource carries no
    # JSON:API ``id`` — the spec marks it optional and the sandbox omits it.
    assert institution.type == "institution"
    assert institution.attributes.routing_number == routing_number
    assert isinstance(institution.attributes.name, str)
    assert isinstance(institution.attributes.is_ach_supported, bool)
    assert isinstance(institution.attributes.is_wire_supported, bool)
