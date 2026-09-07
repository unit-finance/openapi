require 'helpers/api'

RSpec.describe 'get_received_payment', :sandbox do
  it 'returns a received payment by id' do
    api = Helpers::Api.build_payments_api

    list_data, list_status, = api.list_received_payments_with_http_info(page_limit: '1')
    expect(list_status).to eq(200)
    skip 'no received payments in sandbox' if list_data.data.nil? || list_data.data.empty?

    payment_id = Helpers::Api.unwrap(list_data.data.first).id
    data, status_code, = api.get_received_payment_with_http_info(payment_id)

    expect(status_code).to eq(200)
    payment = Helpers::Api.unwrap(data.data)
    expect(payment.id).to eq(payment_id)
    expect(payment.attributes).not_to be_nil
  end
end
