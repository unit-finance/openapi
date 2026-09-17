require 'json'
require 'helpers/api'
require 'helpers/shared_app'

RSpec.describe 'get_by_id', :sandbox do
  it 'returns the application by id' do
    api = Helpers::Api.build_api
    shared = Helpers::SharedApp.get_or_create

    # Read the raw body: since spec 0.10.0 the response compound-includes
    # ApplicationDocument resources whose spec-required attributes the sandbox
    # returns as null, which makes the typed Ruby model raise (see
    # helpers/shared_app.rb). This is a spec defect owned by unit-openapi.
    body, status_code, = api.get_by_id_with_http_info(shared[:id], debug_return_type: 'String')

    expect(status_code).to eq(200)
    app = JSON.parse(body)['data']
    expect(app['id']).to eq(shared[:id])
    expect(app['type']).to eq(shared[:type])
    expect(app).to have_key('attributes')
  end
end
