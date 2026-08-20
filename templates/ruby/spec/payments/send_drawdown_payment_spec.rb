require 'helpers/api'
require 'helpers/fixtures'

RSpec.describe 'send_drawdown_payment', :sandbox do
  it 'sends a drawdown payment' do
    api = Helpers::Api.build_payments_api

    list_data, list_status, = api.list_wire_drawdowns_with_http_info(page_limit: '1')
    expect(list_status).to eq(200)
    skip 'no wire drawdowns in sandbox' if list_data.data.nil? || list_data.data.empty?

    drawdown_id = Helpers::Api.unwrap(list_data.data.first).id
    data, status_code, = api.send_drawdown_payment_with_http_info(
      drawdown_id,
      Helpers::Fixtures.send_drawdown_payment_request
    )

    expect([200, 201]).to include(status_code)
    expect(data.data).not_to be_nil
  end
end
