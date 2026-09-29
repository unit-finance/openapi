from helpers.api import build_lending_programs_api, requires_token, unwrap


@requires_token
def test_lists_lending_programs():
    api = build_lending_programs_api()

    res = api.list_lending_programs_with_http_info(page_limit="20")

    assert res.status_code == 200
    items = res.data.data
    assert isinstance(items, list)
    assert len(items) <= 20
    for item in items:
        program = unwrap(item)
        assert isinstance(program.id, str)
        # The program ``type`` is open-ended in the spec (e.g.
        # ``receivablesRetentionProgram``, ``clientSponsoredChargeCardProgram``),
        # so assert it is present rather than pinning a literal.
        assert isinstance(program.type, str)
        assert program.attributes is not None
        assert isinstance(program.attributes.name, str)
