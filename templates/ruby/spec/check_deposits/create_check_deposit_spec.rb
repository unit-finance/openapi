require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'create_check_deposit', :sandbox do
  it 'creates a check deposit on the shared account' do
    shared = Helpers::SharedAccount.get_or_create
    api = Helpers::Api.build_check_deposits_api

    data, status_code, = api.create_check_deposit_with_http_info(
      Helpers::Fixtures.create_check_deposit_request(shared[:account_id])
    )

    expect(status_code).to eq(201)
    check_deposit = Helpers::Api.unwrap(data.data)
    expect(check_deposit.type).to eq('checkDeposit')
    expect(check_deposit.id).to be_a(String)
    expect(check_deposit.attributes).not_to be_nil
    expect(check_deposit.attributes.status).not_to be_nil
  end
end
