require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'get_account_hold_by_id', :sandbox do
  it 'returns an account hold by id' do
    shared = Helpers::SharedAccount.get_or_create
    api = Helpers::Api.build_accounts_api

    list_data, list_status, = api.list_account_holds_with_http_info(page_limit: '1')
    expect(list_status).to eq(200)
    skip 'no account holds in sandbox' if list_data.data.nil? || list_data.data.empty?

    hold_id = Helpers::Api.unwrap(list_data.data.first).id
    data, status_code, = api.get_account_hold_by_id_with_http_info(hold_id)

    expect(status_code).to eq(200)
    hold = Helpers::Api.unwrap(data.data)
    expect(hold.id).to eq(hold_id)
    expect(hold.attributes).not_to be_nil
  end
end
