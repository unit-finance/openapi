require 'helpers/check_payments'

RSpec.describe 'get_check_image', :sandbox do
  it 'gets a printed front image when the check has been produced' do
    shared = Helpers::CheckPayments.get_or_create_shared_check_payment
    next if shared.nil?

    image = Helpers::CheckPayments.get_check_image_or_skip(shared.id)
    next if image.nil?

    _data, status_code, = image
    expect(status_code).to eq(200)
  end
end
