require 'helpers/api'
require 'helpers/shared_app'

RSpec.describe 'get_by_id', :sandbox do
  it 'returns the application by id' do
    api = Helpers::Api.build_api
    shared = Helpers::SharedApp.get_or_create

    data, status_code, = api.get_by_id_with_http_info(shared[:id])

    expect(status_code).to eq(200)
    app = Helpers::Api.unwrap(data.data)
    expect(app.id).to eq(shared[:id])
    expect(app.type).to eq(shared[:type])
    expect(app.attributes).not_to be_nil
  end
end
