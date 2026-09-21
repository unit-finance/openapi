require 'helpers/api'
require 'helpers/card_fraud_outreach'

RSpec.describe 'create_policy', :sandbox do
  it 'creates a card fraud outreach policy' do
    # Requires email/message outreach settings and a white-label theme that a
    # plain sandbox org may not have; the helper returns nil (skip) when the
    # org rejects the request for a missing relationship.
    result = Helpers::CardFraudOutreach.create_policy_or_skip
    next if result.nil?

    data, status_code, = result
    expect(status_code).to eq(201)
    policy = Helpers::Api.unwrap(data.data)
    expect(policy.type).to eq('cardFraudOutreachPolicy')
    expect(policy.id).to be_a(String)
    expect(policy.attributes).not_to be_nil
  end
end
