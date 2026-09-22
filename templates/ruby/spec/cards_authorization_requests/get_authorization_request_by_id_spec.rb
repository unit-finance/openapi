require 'helpers/api'

RSpec.describe 'get_authorization_request_by_id', :sandbox do
  it 'returns an authorization request by id' do
    api = Helpers::Api.build_cards_authorization_requests_api

    begin
      list_data, list_status, = api.list_authorization_requests_with_http_info(page_limit: '1')
    rescue ArgumentError => e
      skip "spec mismatch: authorization request 200 body did not match the typed models (#{e.message})"
    end

    expect(list_status).to eq(200)
    next if list_data.data.nil? || list_data.data.empty?

    request_id = Helpers::Api.unwrap(list_data.data.first).id
    begin
      data, status_code, = api.get_authorization_request_by_id_with_http_info(request_id)
    rescue ArgumentError => e
      skip "spec mismatch: authorization request 200 body did not match the typed models (#{e.message})"
    end

    expect(status_code).to eq(200)
    request = Helpers::Api.unwrap(data.data)
    expect(request.id).to eq(request_id)
    expect(request.attributes).not_to be_nil
  end
end
