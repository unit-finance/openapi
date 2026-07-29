require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'verify_account', :sandbox do
  it 'verifies a routing and account number pair' do
    api = Helpers::Api.build_accounts_api
    shared = Helpers::SharedAccount.get_or_create

    data, status_code, = api.verify_account_with_http_info(
      Helpers::Fixtures.verify_account_request(
        shared[:routing_number], shared[:account_number]
      )
    )

    expect(status_code).to eq(200)
    expect([true, false]).to include(data.data.exists)
  end
end
