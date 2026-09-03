require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'get_expected_ach_completion_date', :sandbox do
  it 'returns an expected ACH completion date' do
    ctx = Helpers::SharedAccount.get_or_create
    api = Helpers::Api.build_payments_api
    data, status_code, = api.get_expected_ach_completion_date_with_http_info(
      Helpers::Fixtures.expected_ach_completion_date_request(ctx[:account_id])
    )

    expect(status_code).to eq(201)
    result = Helpers::Api.unwrap(data.data)
    expect(result.type).to eq('achExpectedCompletionDate')
    expect(result.attributes).not_to be_nil
  end
end
