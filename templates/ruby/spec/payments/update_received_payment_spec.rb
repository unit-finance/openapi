require 'helpers/api'
require 'helpers/fixtures'

RSpec.describe 'update_received_payment', :sandbox do
  it 'patches a received payment' do
    # TODO: unskip once the payments schemas are fixed. The request succeeds but
    # the response fails to deserialize: AchReceivedPaymentAttributes marks
    # `isAdvanceable` as required (non-nullable) while the sandbox omits it, so
    # the generated model raises during build_from_hash.
    skip 'blocked by non-nullable AchReceivedPaymentAttributes.isAdvanceable in the spec'

    api = Helpers::Api.build_payments_api

    list_data, list_status, = api.list_received_payments_with_http_info(page_limit: '1')
    expect(list_status).to eq(200)
    skip 'no received payments in sandbox' if list_data.data.nil? || list_data.data.empty?

    payment_id = Helpers::Api.unwrap(list_data.data.first).id
    data, status_code, = api.update_received_payment_with_http_info(
      payment_id,
      Helpers::Fixtures.update_received_payment_request
    )

    expect([200, 201]).to include(status_code)
    payment = Helpers::Api.unwrap(data.data)
    expect(payment.id).to eq(payment_id)
    expect(payment.attributes).not_to be_nil
  end
end
