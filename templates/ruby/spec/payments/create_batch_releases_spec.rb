require 'helpers/api'
require 'helpers/fixtures'

RSpec.describe 'create_batch_releases', :sandbox do
  it 'creates a batch release' do
    api = Helpers::Api.build_payments_api

    data, status_code, = api.create_batch_releases_with_http_info(
      Helpers::Fixtures.create_batch_releases_request
    )

    expect(status_code).to eq(201)
    release = Helpers::Api.unwrap(data.data)
    expect(release.id).to be_a(String)
    expect(release.attributes).not_to be_nil
  end
end
