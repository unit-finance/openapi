require 'helpers/api'
require 'helpers/rewards'

RSpec.describe 'get_reward', :sandbox do
  it 'fetches a reward by id' do
    reward_id = Helpers::Rewards.id_or_skip
    next if reward_id.nil?

    api = Helpers::Api.build_rewards_api
    data, status_code, = api.get_reward_with_http_info(reward_id)

    expect(status_code).to eq(200)
    reward = Helpers::Api.unwrap(data.data)
    expect(reward.id).to eq(reward_id)
    expect(reward.type).to eq('reward')
    expect(reward.attributes).not_to be_nil
  end
end
