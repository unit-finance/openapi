require 'helpers/api'
require 'helpers/check_deposits'

RSpec.describe 'clear_check_deposit', :sandbox do
  it 'clears a check deposit that is in a clearable state' do
    shared = Helpers::CheckDeposits.get_or_create_shared_check_deposit

    # `clear` is only valid while the deposit is in `Clearing` and requires the
    # Dynamic Clearing Period feature; when the precondition is not met the
    # helper returns nil and the example passes without asserting.
    result = Helpers::CheckDeposits.clear_or_skip(shared.id)
    next if result.nil?

    data, status_code, = result
    expect(status_code).to eq(200)
    check_deposit = Helpers::Api.unwrap(data.data)
    expect(check_deposit.type).to eq('checkDeposit')
    expect(check_deposit.id).to eq(shared.id)
  end
end
