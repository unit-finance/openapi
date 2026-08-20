require 'helpers/api'
require 'helpers/shared_account'

RSpec.describe 'get_account_limits', :sandbox do
  it 'returns limits for the shared deposit account' do
    shared = Helpers::SharedAccount.get_or_create
    api = Helpers::Api.build_accounts_api

    data, status_code, = api.get_account_limits_with_http_info(shared[:account_id])

    expect(status_code).to eq(200)
    expect(data.data).not_to be_nil
  end
end
