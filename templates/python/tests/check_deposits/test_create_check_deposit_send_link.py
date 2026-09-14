from helpers.api import requires_token
from helpers.check_deposits import create_send_link_or_skip


@requires_token
def test_creates_a_check_deposit_send_link():
    # Requires a white-label theme and authorized user that a plain sandbox org
    # may not have; the helper returns None (skip) when the org rejects the
    # request for a missing relationship.
    result = create_send_link_or_skip()
    if result is None:
        return
    status, document = result

    assert status == 201
    assert isinstance(document["data"]["type"], str)
