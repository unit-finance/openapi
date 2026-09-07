require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'get_expected_ach_completion_date', :sandbox do
  it 'returns the expected ACH completion date' do
    shared = Helpers::SharedAccount.get_or_create
    api = Helpers::Api.build_payments_api

    data, status_code, = api.get_expected_ach_completion_date_with_http_info(
      Helpers::Fixtures.get_expected_ach_completion_date_request(shared[:account_id])
    )

    expect(status_code).to eq(200)
    expect(data.data).not_to be_nil
  end
end
