require 'helpers/api'
require 'helpers/repayments'

RSpec.describe 'create_recurring_repayment', :sandbox do
  it 'creates a recurring book repayment' do
    # nil when the org has no credit product, which makes the credit account
    # every repayment relates to unreachable. See `helpers/credit_accounts.rb`.
    recurring = Helpers::Repayments.create_recurring_or_skip
    next if recurring.nil?

    expect(recurring.id).to be_a(String)
    expect(Helpers::Repayments::RECURRING_TYPES).to include(recurring.type)
    expect(recurring.attributes).not_to be_nil
  end
end
