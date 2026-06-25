require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_app'

RSpec.describe 'update_application', :sandbox do
  it 'patches the shared business application' do
    api = Helpers::Api.build_api
    shared = Helpers::SharedApp.get_or_create

    data, status_code, = api.update_application_with_http_info(
      shared[:id], Helpers::Fixtures.update_business_application_request
    )

    expect([200, 201]).to include(status_code)
    app = Helpers::Api.unwrap(data.data)
    expect(app.id).to eq(shared[:id])
    expect(app.type).to eq('businessApplication')
    expect(app.attributes).not_to be_nil
  end
end
