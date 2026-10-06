require 'helpers/api'

RSpec.describe 'list_rewards', :sandbox do
  it 'returns a JSON:API list with page[limit]=20' do
    api = Helpers::Api.build_rewards_api

    data, status_code, = api.list_rewards_with_http_info(page_limit: '20')

    expect(status_code).to eq(200)
    rewards = Array(data.data)
    expect(rewards.length).to be <= 20
    rewards.each do |item|
      reward = Helpers::Api.unwrap(item)
      expect(reward.id).to be_a(String)
      expect(reward.type).to eq('reward')
      expect(reward.attributes).not_to be_nil
    end
  end
end
