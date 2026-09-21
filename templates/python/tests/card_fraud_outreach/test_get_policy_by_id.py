from helpers.api import build_card_fraud_outreach_api, requires_token
from helpers.card_fraud_outreach import get_or_create_policy


@requires_token
def test_gets_a_card_fraud_outreach_policy_by_id():
    api = build_card_fraud_outreach_api()
    policy = get_or_create_policy()
    if policy is None:
        return

    res = api.get_policy_by_id_with_http_info(policy.id)

    assert res.status_code == 200
    data = res.data.data
    assert data.id == policy.id
    assert data.type == "cardFraudOutreachPolicy"
    assert data.attributes is not None
