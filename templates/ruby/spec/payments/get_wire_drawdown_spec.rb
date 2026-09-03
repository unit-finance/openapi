require 'helpers/api'

RSpec.describe 'get_wire_drawdown', :sandbox do
  it 'returns a wire drawdown when one exists' do
    api = Helpers::Api.build_payments_api
    listed, listed_status, = api.list_wire_drawdowns_with_http_info(page_limit: '1')
    expect(listed_status).to eq(200)
    return if listed.data.empty?

    drawdown_id = Helpers::Api.unwrap(listed.data.first).id
    data, status_code, = api.get_wire_drawdown_with_http_info(drawdown_id)

    expect(status_code).to eq(200)
    drawdown = Helpers::Api.unwrap(data.data)
    expect(drawdown.id).to eq(drawdown_id)
    expect(drawdown.type).to eq('wireDrawdown')
  end
end
