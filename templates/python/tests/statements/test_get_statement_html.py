from helpers.api import build_statements_api, requires_token
from helpers.statements import get_statement_id


@requires_token
def test_downloads_a_statement_as_html():
    statement_id = get_statement_id()
    if statement_id is None:
        return

    res = build_statements_api().get_statement_html_with_http_info(statement_id)

    assert res.status_code == 200
    assert isinstance(res.data, str)
