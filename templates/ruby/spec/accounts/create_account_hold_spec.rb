require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'create_account_hold', :sandbox do
  # SKIPPED: blocked by an upstream unit-openapi spec bug — the generated request
  # sets data.type = "createAccountHoldJson", but the API requires "accountHold".
  it 'creates an account hold on a deposit account', skip: 'Blocked by unit-openapi spec bug: account-hold data.type' do
    api = Helpers::Api.build_accounts_api
    shared = Helpers::SharedAccount.get_or_create

    data, status_code, = api.create_account_hold_with_http_info(
      Helpers::Fixtures.create_account_hold_request(shared[:id])
    )

    expect(status_code).to eq(201)
    hold = Helpers::Api.unwrap(data.data)
    expect(hold.type).to eq('accountHold')
    expect(hold.id).to be_a(String)
    expect(hold.attributes).not_to be_nil
    expect(hold.attributes.amount).not_to be_nil
    expect(hold.attributes.description).not_to be_nil
  end
end
