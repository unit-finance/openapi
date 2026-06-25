require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_app'

RSpec.describe 'update_business_beneficial_owner', :sandbox do
  it 'patches a beneficial owner of the shared business application' do
    api = Helpers::Api.build_api
    shared = Helpers::SharedApp.get_or_create

    skip "No beneficial owner found in the shared business application's beneficialOwners relationship." unless shared[:beneficial_owner_id]

    data, status_code, = api.update_business_beneficial_owner_with_http_info(
      shared[:beneficial_owner_id],
      Helpers::Fixtures.update_business_beneficial_owner_request(shared[:id])
    )

    expect(status_code).to eq(201)
    owner = Helpers::Api.unwrap(data.data)
    expect(owner.type).to eq('beneficialOwner')
    expect(owner.id).to eq(shared[:beneficial_owner_id])
  end
end
