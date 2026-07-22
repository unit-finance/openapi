require 'helpers/api'
require 'helpers/shared_account'

RSpec.describe 'get_account', :sandbox do
  it 'returns the deposit account by id' do
    api = Helpers::Api.build_accounts_api
    shared = Helpers::SharedAccount.get_or_create

    data, status_code, = api.get_account_with_http_info(shared[:id])

    expect(status_code).to eq(200)
    account = Helpers::Api.unwrap(data.data)
    expect(account.id).to eq(shared[:id])
    expect(account.type).to eq('depositAccount')
    expect(account.attributes).not_to be_nil
    expect(account.attributes.routing_number).not_to be_nil
    expect(account.attributes.account_number).not_to be_nil
  end
end
