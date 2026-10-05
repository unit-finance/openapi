require 'json'
require 'helpers/api'
require 'helpers/stop_payments'

RSpec.describe 'list_stop_payments', :sandbox do
  it 'returns a JSON:API list with page[limit]=20' do
    # Raw body: the generated `CheckStopPayment` model pins `type` to the
    # spec's `checkStopPayment`, which the sandbox does not send. See
    # `helpers/stop_payments.rb`.
    api = Helpers::Api.build_stop_payments_api
    body, status_code, = api.list_stop_payments_with_http_info(
      page_limit: '20', debug_return_type: 'String'
    )

    expect(status_code).to eq(200)
    stop_payments = JSON.parse(body)['data']
    expect(stop_payments).to be_an(Array)
    expect(stop_payments.length).to be <= 20
    stop_payments.each do |stop_payment|
      expect(stop_payment['id']).to be_a(String)
      expect(Helpers::StopPayments::TYPES).to include(stop_payment['type'])
      expect(stop_payment['attributes']).not_to be_nil
    end
  end
end
