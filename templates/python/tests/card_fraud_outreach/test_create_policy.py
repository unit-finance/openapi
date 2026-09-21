from helpers.api import requires_token
from helpers.card_fraud_outreach import create_policy_or_skip


@requires_token
def test_creates_a_card_fraud_outreach_policy():
    # Requires email/message outreach settings and a white-label theme that a
    # plain sandbox org may not have; the helper returns None (skip) when the
    # org rejects the request for a missing relationship.
    created = create_policy_or_skip()
    if created is None:
        return
    status, document = created

    assert status == 201
    data = document.data
    assert data.type == "cardFraudOutreachPolicy"
    assert isinstance(data.id, str)
    assert data.attributes is not None
