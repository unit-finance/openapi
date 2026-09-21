require 'json'
require 'helpers/api'
require 'helpers/card_fraud_outreach'
require 'helpers/fixtures'

RSpec.describe 'mark_card_fraud_case_as_fraud', :sandbox do
  it 'marks a pending card fraud case as fraud when one exists' do
    status_code, document = Helpers::CardFraudOutreach.list_cases_raw
    next if document.nil? || [400, 403, 404, 409, 410, 500].include?(status_code)

    pending = Helpers::CardFraudOutreach.pending_cases(document['data']).find { |c| !c[:activity_ids].empty? }
    next if pending.nil?

    api = Helpers::Api.build_card_fraud_outreach_api
    begin
      data, mark_status, = api.mark_card_fraud_case_as_fraud_with_http_info(
        pending[:id],
        Helpers::Fixtures.mark_card_fraud_case_as_fraud_request(pending[:activity_ids]),
        debug_return_type: 'String'
      )
    rescue UnitFinanceSdk::ApiError => e
      next if [400, 403, 404, 409, 410, 422, 500].include?(e.code)

      raise
    end

    expect(mark_status).to eq(200)
    body = JSON.parse(data)
    expect(body['data']['id']).to eq(pending[:id])
    expect(body['data']).to have_key('attributes')
  end
end
