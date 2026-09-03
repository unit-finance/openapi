require 'helpers/api'
require 'helpers/fixtures'

RSpec.describe 'update_received_payment', :sandbox do
  it 'updates a received payment when one exists' do
    api = Helpers::Api.build_payments_api
    listed, listed_status, = api.list_received_payments_with_http_info(page_limit: '1')
    expect(listed_status).to eq(200)
    return if listed.data.empty?

    received_id = Helpers::Api.unwrap(listed.data.first).id
    data, status_code, = api.update_received_payment_with_http_info(
      received_id,
      Helpers::Fixtures.update_received_payment_request
    )

    expect(status_code).to eq(200)
    received = Helpers::Api.unwrap(data.data)
    expect(received.id).to eq(received_id)
  end
end
