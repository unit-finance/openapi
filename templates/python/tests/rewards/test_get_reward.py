from helpers.api import build_rewards_api, requires_token, unwrap
from helpers.rewards import get_reward_id


@requires_token
def test_fetches_a_reward_by_id():
    reward_id = get_reward_id()
    if reward_id is None:
        return

    res = build_rewards_api().get_reward_with_http_info(reward_id)

    assert res.status_code == 200
    reward = unwrap(res.data.data)
    assert reward.id == reward_id
    assert reward.type == "reward"
    assert reward.attributes is not None
