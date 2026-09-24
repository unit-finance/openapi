require 'helpers/api'
require 'helpers/daca'
require 'helpers/fixtures'

RSpec.describe 'activate_control_agreement', :sandbox do
  it 'activates a control agreement on an entered account' do
    account_id = Helpers::Daca.create_account_in_state(:entered)
    api = Helpers::Api.build_daca_api

    data, status_code, = api.activate_control_agreement_with_http_info(
      account_id,
      body: Helpers::Fixtures.update_daca_policies_request(account_id)
    )

    expect(status_code).to eq(200)
    account = Helpers::Api.unwrap(data.data)
    expect(account.id).to eq(account_id)
    expect(account.type).to eq('depositAccount')
    expect(account.attributes).not_to be_nil
  end
end
