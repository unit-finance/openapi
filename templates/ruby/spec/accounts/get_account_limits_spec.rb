require 'helpers/api'
require 'helpers/shared_account'

RSpec.describe 'get_account_limits', :sandbox do
  it 'returns account limits' do
    ctx = Helpers::SharedAccount.get_or_create
    api = Helpers::Api.build_accounts_api
    data, status_code, = api.get_account_limits_with_http_info(ctx[:account_id])

    expect(status_code).to eq(200)
    limits = Helpers::Api.unwrap(data.data)
    expect(limits.type).to eq('limits')
    expect(limits.attributes).not_to be_nil
  end
end
