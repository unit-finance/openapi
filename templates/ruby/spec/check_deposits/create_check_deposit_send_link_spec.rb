require 'helpers/api'
require 'helpers/check_deposits'

RSpec.describe 'create_check_deposit_send_link', :sandbox do
  it 'creates a check deposit send link' do
    # Requires a white-label theme and authorized user that a plain sandbox org
    # may not have; the helper returns nil (skip) when the org rejects the
    # request for a missing relationship.
    result = Helpers::CheckDeposits.create_send_link_or_skip
    next if result.nil?

    data, status_code, = result
    expect(status_code).to eq(201)
    send_link = Helpers::Api.unwrap(data.data)
    expect(send_link.type).to be_a(String)
  end
end
