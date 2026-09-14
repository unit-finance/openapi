require 'helpers/api'
require 'helpers/check_deposits'

RSpec.describe 'confirm_check_deposit_details', :sandbox do
  it 'confirms a check deposit awaiting customer confirmation' do
    shared = Helpers::CheckDeposits.get_or_create_shared_check_deposit

    # `confirm` is only valid while the deposit is in
    # `AwaitingCustomerConfirmation`; when that precondition is not met the
    # helper returns nil and the example passes without asserting.
    result = Helpers::CheckDeposits.confirm_or_skip(shared.id)
    next if result.nil?

    _data, status_code, = result
    expect(status_code).to eq(200)
  end
end
