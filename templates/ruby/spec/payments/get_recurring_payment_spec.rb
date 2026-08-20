require 'helpers/api'

RSpec.describe 'get_recurring_payment', :sandbox do
  it 'returns a recurring payment by id' do
    api = Helpers::Api.build_payments_api

    list_data, list_status, = api.list_recurring_payments_with_http_info(page_limit: '1')
    expect(list_status).to eq(200)
    skip 'no recurring payments in sandbox' if list_data.data.nil? || list_data.data.empty?

    recurring_id = Helpers::Api.unwrap(list_data.data.first).id
    data, status_code, = api.get_recurring_payment_with_http_info(recurring_id)

    expect(status_code).to eq(200)
    recurring = Helpers::Api.unwrap(data.data)
    expect(recurring.id).to eq(recurring_id)
    expect(recurring.attributes).not_to be_nil
  end
end
