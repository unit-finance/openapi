require 'helpers/api'
require 'helpers/rewards'

RSpec.describe 'create_reward', :sandbox do
  it 'creates a reward on the shared account' do
    reward = Helpers::Rewards.create_or_skip
    next if reward.nil?

    expect(reward.id).to be_a(String)
    expect(reward.type).to eq('reward')
    expect(reward.attributes).not_to be_nil
  end
end
