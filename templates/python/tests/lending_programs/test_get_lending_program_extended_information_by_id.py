from helpers.api import build_lending_programs_api, requires_token, unwrap
from helpers.lending_programs import get_first_lending_program_id_or_skip


@requires_token
def test_gets_lending_program_extended_information():
    api = build_lending_programs_api()
    program_id = get_first_lending_program_id_or_skip()
    if program_id is None:
        return

    res = api.get_lending_program_extended_information_by_id_with_http_info(program_id)

    assert res.status_code == 200
    extended = unwrap(res.data.data)
    assert extended.id == program_id
    assert extended.type == "lendingProgramExtendedInformation"
    assert extended.attributes is not None
