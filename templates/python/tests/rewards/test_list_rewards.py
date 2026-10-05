from helpers.api import build_rewards_api, requires_token, unwrap


@requires_token
def test_returns_a_json_api_list_with_page_limit_20():
    res = build_rewards_api().list_rewards_with_http_info(page_limit="20")

    assert res.status_code == 200
    rewards = res.data.data
    assert isinstance(rewards, list)
    assert len(rewards) <= 20
    for item in rewards:
        reward = unwrap(item)
        assert isinstance(reward.id, str)
        assert reward.type == "reward"
        assert reward.attributes is not None
