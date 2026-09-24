from helpers.api import requires_token
from helpers.credit import create_credit_application_or_skip, envelope_of


@requires_token
def test_creates_credit_application_for_existing_customer():
    # Needs a real ``lendingProgram`` id, and this SDK surface has no
    # list-lending-programs operation; the helper borrows one off an existing
    # credit application and skips when the org has none.
    created = create_credit_application_or_skip()
    if created is None:
        return

    status, document = created
    assert status == 201
    envelope = envelope_of(document.data)
    assert isinstance(envelope["id"], str)
    assert envelope["type"] is not None
    assert envelope["attributes"] is not None
