require 'helpers/api'

RSpec.describe 'send_drawdown_payment', :sandbox do
  it 'sends a drawdown payment when a wire drawdown exists' do
    api = Helpers::Api.build_payments_api
    listed, listed_status, = api.list_wire_drawdowns_with_http_info(page_limit: '1')
    expect(listed_status).to eq(200)
    return if listed.data.empty?

    drawdown_id = Helpers::Api.unwrap(listed.data.first).id
    data, status_code, = api.send_drawdown_payment_with_http_info(
      drawdown_id,
      {
        'data' => {
          'type' => 'sendWireDrawdown',
          'attributes' => { 'idempotencyKey' => "sdk-ruby-drawdown-#{Time.now.to_i}" }
        }
      }
    )

    expect(status_code).to eq(201)
    payment = Helpers::Api.unwrap(data.data)
    expect(payment.type).to eq('wirePayment')
    expect(payment.id).to be_a(String)
  end
end
