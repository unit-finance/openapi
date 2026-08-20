require 'helpers/api'

RSpec.describe 'clear_ach_debit_payment', :sandbox do
  it 'clears an ACH debit payment in clearing status' do
    skip 'requires an ACH debit payment in clearing status; no outgoing-payments list endpoint to discover one'
  end
end
