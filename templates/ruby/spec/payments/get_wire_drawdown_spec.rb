require 'helpers/api'

RSpec.describe 'get_wire_drawdown', :sandbox do
  it 'returns a wire drawdown by id' do
    api = Helpers::Api.build_payments_api

    list_data, list_status, = api.list_wire_drawdowns_with_http_info(page_limit: '1')
    expect(list_status).to eq(200)
    skip 'no wire drawdowns in sandbox' if list_data.data.nil? || list_data.data.empty?

    drawdown_id = Helpers::Api.unwrap(list_data.data.first).id
    data, status_code, = api.get_wire_drawdown_with_http_info(drawdown_id)

    expect(status_code).to eq(200)
    drawdown = Helpers::Api.unwrap(data.data)
    expect(drawdown.id).to eq(drawdown_id)
    expect(drawdown.attributes).not_to be_nil
  end
end
