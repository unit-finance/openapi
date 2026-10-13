require 'unit_openapi_ruby_sdk'
require 'helpers/api'
require 'helpers/capabilities'
require 'helpers/fixtures'
require 'helpers/repayments'

RSpec.describe 'return_external_repayment', :sandbox do
  it 'returns an external repayment' do
    repayment_id = Helpers::Repayments.create_external_or_skip
    next if repayment_id.nil?

    api = Helpers::Api.build_repayments_api
    begin
      data, status_code, = api.return_external_repayment_with_http_info(
        repayment_id, Helpers::Fixtures.return_external_repayment_request(repayment_id)
      )
    rescue UnitFinanceSdk::ApiError => e
      # `return` is only valid once the repayment has settled to `Sent`. The
      # sandbox creates it `Pending` and there is no way to advance it, so a
      # rejected return is an unreachable state, not a bad request.
      raise unless Helpers::Capabilities.capability_error?(e)

      warn 'The external repayment is not in a returnable state on this ' \
           "sandbox org; skipping. #{Helpers::Capabilities.error_body(e)}"
      next
    end

    expect(status_code).to eq(200)
    repayment = Helpers::Api.unwrap(data.data)
    expect(repayment.id).to eq(repayment_id)
    expect(repayment.type).to eq('externalRepayment')
    expect(repayment.attributes).not_to be_nil
  end
end
