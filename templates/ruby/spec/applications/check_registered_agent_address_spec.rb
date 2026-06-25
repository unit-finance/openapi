require 'helpers/api'
require 'helpers/fixtures'

RSpec.describe 'check_registered_agent_address', :sandbox do
  it 'returns whether an address is a registered agent address' do
    api = Helpers::Api.build_api
    data, status_code, = api.check_registered_agent_address_with_http_info(
      Helpers::Fixtures.check_registered_agent_address_request
    )

    expect(status_code).to eq(200)
    result = Helpers::Api.unwrap(data.data)
    expect(result.type).to eq('checkRegisteredAgentAddress')
    expect([true, false]).to include(result.attributes.is_registered_agent_address)
  end
end
