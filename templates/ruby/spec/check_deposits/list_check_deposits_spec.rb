require 'helpers/api'
require 'helpers/check_deposits'

RSpec.describe 'list_check_deposits', :sandbox do
  it 'returns a JSON:API list with page limit 10' do
    Helpers::CheckDeposits.get_or_create_shared_check_deposit
    api = Helpers::Api.build_check_deposits_api

    data, status_code, = api.list_check_deposits_with_http_info(page_limit: '10')

    expect(status_code).to eq(200)
    expect(data.data).to be_an(Array)
    expect(data.data.size).to be <= 10
    data.data.each do |item|
      check_deposit = Helpers::Api.unwrap(item)
      expect(check_deposit.type).to eq('checkDeposit')
      expect(check_deposit.id).to be_a(String)
    end
  end
end
