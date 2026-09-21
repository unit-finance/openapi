require 'helpers/api'
require 'helpers/card_fraud_outreach'

RSpec.describe 'get_policy_by_id', :sandbox do
  it 'returns a card fraud outreach policy by id' do
    policy = Helpers::CardFraudOutreach.get_or_create_policy
    next if policy.nil?

    api = Helpers::Api.build_card_fraud_outreach_api
    data, status_code, = api.get_policy_by_id_with_http_info(policy.id)

    expect(status_code).to eq(200)
    fetched = Helpers::Api.unwrap(data.data)
    expect(fetched.id).to eq(policy.id)
    expect(fetched.type).to eq('cardFraudOutreachPolicy')
    expect(fetched.attributes).not_to be_nil
  end
end
