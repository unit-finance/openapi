require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'verify_account', :sandbox do
  it 'verifies the shared deposit account' do
    shared = Helpers::SharedAccount.get_or_create
    api = Helpers::Api.build_accounts_api

    data, status_code, = api.verify_account_with_http_info(
      Helpers::Fixtures.verify_account_request(
        shared[:routing_number],
        shared[:account_number]
      )
    )

    expect(status_code).to eq(200)
    expect(data.data).not_to be_nil
  end
end
