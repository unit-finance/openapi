require 'helpers/api'
require 'helpers/shared_account'

RSpec.describe 'get_by_routing_number', :sandbox do
  it "reads the institution behind the shared account's routing number" do
    routing_number = Helpers::SharedAccount.get_or_create[:routing_number]
    api = Helpers::Api.build_institutions_api

    data, status_code, = api.get_by_routing_number_with_http_info(routing_number)

    expect(status_code).to eq(200)
    institution = Helpers::Api.unwrap(data.data)
    # `institution` is keyed by routing number, so the resource carries no
    # JSON:API `id` -- the spec marks it optional and the sandbox omits it.
    expect(institution.type).to eq('institution')
    expect(institution.attributes.routing_number).to eq(routing_number)
    expect(institution.attributes.name).to be_a(String)
    expect(institution.attributes.is_ach_supported).to be(true).or be(false)
    expect(institution.attributes.is_wire_supported).to be(true).or be(false)
  end
end
