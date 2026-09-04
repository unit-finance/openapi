require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/holds'
require 'helpers/shared_account'

RSpec.describe 'get_account_hold_by_id', :sandbox do
  it 'returns an account hold by id' do
    shared = Helpers::SharedAccount.get_or_create
    api = Helpers::Api.build_accounts_api

    # Mirror the Node suite: create a hold (or return early when holds are
    # disabled on the org) and fetch it by id, rather than listing and skipping.
    result = Helpers::Holds.create_or_skip(api, shared[:account_id])
    next if result.nil?

    created, create_status, = result
    expect(create_status).to eq(201)
    hold_id = Helpers::Api.unwrap(created.data).id

    data, status_code, = api.get_account_hold_by_id_with_http_info(hold_id)

    expect(status_code).to eq(200)
    hold = Helpers::Api.unwrap(data.data)
    expect(hold.id).to eq(hold_id)
    expect(hold.attributes).not_to be_nil
  end
end
