require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'get_account_hold_by_id', :sandbox do
  it 'returns an account hold by id' do
    ctx = Helpers::SharedAccount.get_or_create
    api = Helpers::Api.build_accounts_api
    created, created_status, = api.create_account_hold_with_http_info(
      Helpers::Fixtures.create_account_hold_request(ctx[:account_id])
    )
    expect(created_status).to eq(201)
    hold_id = Helpers::Api.unwrap(created.data).id

    data, status_code, = api.get_account_hold_by_id_with_http_info(hold_id)

    expect(status_code).to eq(200)
    hold = Helpers::Api.unwrap(data.data)
    expect(hold.id).to eq(hold_id)
    expect(hold.type).to eq('accountHold')
  end
end
