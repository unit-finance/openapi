require 'helpers/api'
require 'helpers/check_deposits'

RSpec.describe 'get_check_deposit', :sandbox do
  it 'gets a check deposit by id' do
    shared = Helpers::CheckDeposits.get_or_create_shared_check_deposit
    api = Helpers::Api.build_check_deposits_api

    data, status_code, = api.get_check_deposit_with_http_info(shared.id)

    expect(status_code).to eq(200)
    check_deposit = Helpers::Api.unwrap(data.data)
    expect(check_deposit.type).to eq('checkDeposit')
    expect(check_deposit.id).to eq(shared.id)
    expect(check_deposit.attributes).not_to be_nil
    expect(check_deposit.attributes.status).not_to be_nil
  end
end
