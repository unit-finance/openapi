from helpers.api import requires_token
from helpers.credit import (
    create_credit_decision_or_skip,
    envelope_of,
    get_credit_application_id,
)


@requires_token
def test_records_approved_credit_limit_decision():
    credit_application_id = get_credit_application_id()
    if credit_application_id is None:
        return

    created = create_credit_decision_or_skip(credit_application_id)
    if created is None:
        return

    status, document = created
    assert status == 201
    envelope = envelope_of(document.data)
    assert isinstance(envelope["id"], str)
    assert envelope["type"] is not None
    assert envelope["attributes"] is not None
