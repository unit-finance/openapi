require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'create_account_hold', :sandbox do
  it 'creates an account hold' do
    ctx = Helpers::SharedAccount.get_or_create
    api = Helpers::Api.build_accounts_api
    data, status_code, = api.create_account_hold_with_http_info(
      Helpers::Fixtures.create_account_hold_request(ctx[:account_id])
    )

    expect(status_code).to eq(201)
    hold = Helpers::Api.unwrap(data.data)
    expect(hold.type).to eq('accountHold')
    expect(hold.id).to be_a(String)
    expect(hold.attributes).not_to be_nil
  end
end
