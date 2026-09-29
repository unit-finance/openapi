from helpers.api import build_lending_programs_api, requires_token, unwrap
from helpers.lending_programs import get_first_lending_program_id_or_skip


@requires_token
def test_gets_a_lending_program_by_id():
    api = build_lending_programs_api()
    program_id = get_first_lending_program_id_or_skip()
    if program_id is None:
        return

    res = api.get_lending_program_by_id_with_http_info(program_id)

    assert res.status_code == 200
    program = unwrap(res.data.data)
    assert program.id == program_id
    assert isinstance(program.type, str)
    assert program.attributes is not None
    assert isinstance(program.attributes.name, str)
    assert isinstance(program.attributes.program_size_limit, int)
