require 'json'
require 'helpers/api'
require 'helpers/credit'
require 'helpers/fixtures'

RSpec.describe 'update_credit_application', :sandbox do
  it 'patches the underwriting attributes of a credit application' do
    application_id = Helpers::Credit.credit_application_id
    next if application_id.nil?

    api = Helpers::Api.build_credit_applications_api
    body, status_code, = api.update_credit_application_with_http_info(
      application_id,
      Helpers::Fixtures.update_credit_application_request,
      debug_return_type: 'String'
    )
    document = JSON.parse(body)

    expect(status_code).to eq(200)
    expect(document.dig('data', 'id')).to eq(application_id)
    expect(document.dig('data', 'type')).to be_a(String)
    expect(document['data']).to have_key('attributes')
  end
end
