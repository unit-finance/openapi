require 'json'
require 'helpers/api'
require 'helpers/stop_payments'

RSpec.describe 'get_stop_payment', :sandbox do
  it 'fetches a stop payment by id' do
    stop_payment_id = Helpers::StopPayments.create_check_id

    # Raw body: the check variant comes back as `stopPayment`, which matches no
    # arm of the response `oneOf`. See `helpers/stop_payments.rb`.
    api = Helpers::Api.build_stop_payments_api
    body, status_code, = api.get_stop_payment_with_http_info(
      stop_payment_id, debug_return_type: 'String'
    )

    expect(status_code).to eq(200)
    stop_payment = JSON.parse(body)['data']
    expect(stop_payment['id']).to eq(stop_payment_id)
    expect(stop_payment['type']).to eq(Helpers::StopPayments::CHECK_TYPE)
    expect(stop_payment['attributes']).not_to be_nil
  end
end
