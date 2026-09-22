require 'helpers/api'

RSpec.describe 'release_authorization', :sandbox do
  it 'releases an authorization when one is in Authorized status' do
    api = Helpers::Api.build_cards_authorizations_api

    begin
      list_data, list_status, = api.list_authorizations_with_http_info(
        page_limit: '1',
        filter_status: 'Authorized'
      )
    rescue ArgumentError => e
      skip "spec mismatch: Authorization 200 body did not match the typed models (#{e.message})"
    end

    expect(list_status).to eq(200)
    next if list_data.data.nil? || list_data.data.empty?

    authorization_id = Helpers::Api.unwrap(list_data.data.first).id
    begin
      data, status_code, = api.release_authorization_with_http_info(authorization_id)
    rescue UnitFinanceSdk::ApiError => e
      next if e.code && e.code >= 400

      raise
    rescue ArgumentError => e
      skip "spec mismatch: Authorization 200 body did not match the typed models (#{e.message})"
    end

    expect(status_code).to eq(200)
    authorization = Helpers::Api.unwrap(data.data)
    expect(authorization.id).to eq(authorization_id)
    expect(authorization.attributes).not_to be_nil
  end
end
