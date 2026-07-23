require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'release_account_hold', :sandbox do
  # SKIPPED: blocked by upstream unit-openapi spec bugs — creating the hold fails
  # (data.type "createAccountHoldJson" vs required "accountHold"), and the release
  # request's attributes schema omits the required idempotencyKey.
  it 'releases an account hold', skip: 'Blocked by unit-openapi spec bug: account-hold create/release' do
    api = Helpers::Api.build_accounts_api
    shared = Helpers::SharedAccount.get_or_create

    created, created_status, = api.create_account_hold_with_http_info(
      Helpers::Fixtures.create_account_hold_request(shared[:id])
    )
    expect(created_status).to eq(201)
    hold_id = Helpers::Api.unwrap(created.data).id

    data, status_code, = api.release_account_hold_with_http_info(
      hold_id,
      Helpers::Fixtures.release_account_hold_request
    )

    expect(status_code).to eq(200)
    hold = Helpers::Api.unwrap(data.data)
    expect(hold.id).to eq(hold_id)
    expect(hold.type).to eq('accountHold')
    expect(hold.attributes).not_to be_nil
    expect(hold.attributes.status).not_to be_nil
  end
end
