require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/holds'
require 'helpers/shared_account'

RSpec.describe 'release_account_hold', :sandbox do
  it 'releases an account hold' do
    shared = Helpers::SharedAccount.get_or_create
    api = Helpers::Api.build_accounts_api

    result = Helpers::Holds.create_or_skip(api, shared[:account_id])
    skip 'account holds are disabled on this sandbox org' if result.nil?

    created, create_status, = result
    expect(create_status).to eq(201)
    hold_id = Helpers::Api.unwrap(created.data).id

    data, status_code, = api.release_account_hold_with_http_info(
      hold_id,
      Helpers::Fixtures.release_account_hold_request
    )

    expect([200, 201]).to include(status_code)
    hold = Helpers::Api.unwrap(data.data)
    expect(hold.id).to eq(hold_id)
    expect(hold.attributes).not_to be_nil
  end
end
