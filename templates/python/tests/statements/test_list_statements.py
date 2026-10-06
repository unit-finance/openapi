from helpers.api import requires_token
from helpers.statements import STATEMENT_TYPE, list_statements_raw


# No page-size assertion: `/statements` accepts `page[limit]` but ignores it —
# the sandbox returns every statement of the period regardless. That is an
# API/spec mismatch owned by `unit-openapi`, so the suite asserts envelope
# shape only.
@requires_token
def test_returns_a_json_api_list():
    statements = list_statements_raw()

    assert isinstance(statements, list)
    for statement in statements:
        assert isinstance(statement["id"], str)
        assert statement["type"] == STATEMENT_TYPE
        assert statement["attributes"] is not None
