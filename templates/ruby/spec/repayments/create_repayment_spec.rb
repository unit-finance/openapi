require 'helpers/api'
require 'helpers/repayments'

RSpec.describe 'create_repayment', :sandbox do
  it 'creates a book repayment against a credit account' do
    # nil when the org has no credit product, which makes the credit account
    # every repayment relates to unreachable. See `helpers/credit_accounts.rb`.
    repayment = Helpers::Repayments.create_book_or_skip
    next if repayment.nil?

    expect(repayment.id).to be_a(String)
    expect(Helpers::Repayments::TYPES).to include(repayment.type)
    expect(repayment.attributes).not_to be_nil
  end
end
