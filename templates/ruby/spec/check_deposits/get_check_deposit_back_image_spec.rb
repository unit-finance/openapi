require 'helpers/api'
require 'helpers/check_deposits'

RSpec.describe 'get_check_deposit_back_image', :sandbox do
  it 'gets the check deposit back image' do
    shared = Helpers::CheckDeposits.get_or_create_shared_check_deposit
    api = Helpers::Api.build_check_deposits_api

    _data, status_code, = api.get_check_deposit_back_image_with_http_info(shared.id)

    expect(status_code).to eq(200)
  end
end
