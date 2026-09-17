require 'json'
require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_app'

RSpec.describe 'update_application', :sandbox do
  it 'patches the shared business application' do
    api = Helpers::Api.build_api
    shared = Helpers::SharedApp.get_or_create

    # Read the raw body: since spec 0.10.0 the response compound-includes
    # ApplicationDocument resources whose spec-required attributes the sandbox
    # returns as null, which makes the typed Ruby model raise (see
    # helpers/shared_app.rb). This is a spec defect owned by unit-openapi.
    body, status_code, = api.update_application_with_http_info(
      shared[:id], Helpers::Fixtures.update_business_application_request,
      debug_return_type: 'String'
    )

    expect([200, 201]).to include(status_code)
    app = JSON.parse(body)['data']
    expect(app['id']).to eq(shared[:id])
    expect(app['type']).to eq('businessApplication')
    expect(app).to have_key('attributes')
  end
end
