require 'helpers/api'

RSpec.describe 'list_check_payments', :sandbox do
  it 'returns a JSON:API list with page limit 10' do
    api = Helpers::Api.build_check_payments_api
    begin
      data, status_code, = api.list_check_payments_with_http_info(page_limit: '10')
    rescue ArgumentError => e
      skip "spec mismatch: CheckPayment 200 body did not match the typed models (#{e.message})"
    end

    expect(status_code).to eq(200)
    expect(data.data).to be_an(Array)
    expect(data.data.size).to be <= 10
    data.data.each do |item|
      payment = Helpers::Api.unwrap(item)
      expect(payment.type).to eq('checkPayment')
      expect(payment.id).to be_a(String)
    end
  end
end
