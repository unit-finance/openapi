require 'helpers/api'
require 'helpers/check_deposits'

RSpec.describe 'upload_check_deposit_back_image', :sandbox do
  it 'uploads the check deposit back image' do
    created = Helpers::CheckDeposits.create_check_deposit
    api = Helpers::Api.build_check_deposits_api
    # The back image can only be uploaded once the front image is present.
    api.upload_check_deposit_front_image(created.id, Helpers::CheckDeposits::JPEG_IMAGE_BYTES)

    data, status_code, = api.upload_check_deposit_back_image_with_http_info(
      created.id, Helpers::CheckDeposits::JPEG_IMAGE_BYTES
    )

    expect(status_code).to eq(200)
    check_deposit = Helpers::Api.unwrap(data.data)
    expect(check_deposit.type).to eq('checkDeposit')
    expect(check_deposit.id).to eq(created.id)
    expect(check_deposit.attributes).not_to be_nil
  end
end
