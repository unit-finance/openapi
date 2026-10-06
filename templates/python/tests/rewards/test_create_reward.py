from helpers.api import requires_token
from helpers.rewards import create_reward_or_skip


@requires_token
def test_creates_a_reward_on_the_shared_account():
    reward = create_reward_or_skip()
    if reward is None:
        return

    assert reward.type == "reward"
    assert isinstance(reward.id, str)
