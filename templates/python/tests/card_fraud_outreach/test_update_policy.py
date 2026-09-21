from helpers.api import build_card_fraud_outreach_api, requires_token
from helpers.card_fraud_outreach import get_or_create_policy
from helpers.fixtures import build_update_policy_request


@requires_token
def test_updates_a_card_fraud_outreach_policy():
    api = build_card_fraud_outreach_api()
    policy = get_or_create_policy()
    if policy is None:
        return

    res = api.update_policy_with_http_info(policy.id, build_update_policy_request())

    assert res.status_code == 200
    data = res.data.data
    assert data.id == policy.id
    assert data.type == "cardFraudOutreachPolicy"
    assert data.attributes is not None
