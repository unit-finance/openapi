require 'helpers/api'
require 'helpers/card_fraud_outreach'
require 'helpers/fixtures'

RSpec.describe 'update_policy', :sandbox do
  it 'updates a card fraud outreach policy' do
    policy = Helpers::CardFraudOutreach.get_or_create_policy
    next if policy.nil?

    api = Helpers::Api.build_card_fraud_outreach_api
    data, status_code, = api.update_policy_with_http_info(
      policy.id,
      Helpers::Fixtures.update_policy_request
    )

    expect(status_code).to eq(200)
    updated = Helpers::Api.unwrap(data.data)
    expect(updated.id).to eq(policy.id)
    expect(updated.type).to eq('cardFraudOutreachPolicy')
    expect(updated.attributes).not_to be_nil
  end
end
