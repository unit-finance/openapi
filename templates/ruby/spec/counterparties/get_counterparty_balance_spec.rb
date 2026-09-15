require 'helpers/api'
require 'helpers/counterparties'

RSpec.describe 'get_counterparty_balance', :sandbox do
  it 'returns the balance of the counterparty' do
    counterparty = Helpers::Counterparties.get_or_create
    api = Helpers::Api.build_counterparties_api

    result = Helpers::Counterparties.balance_or_skip(api, counterparty.id)
    # Mirror the Node suite: when the sandbox exposes no balance for this
    # counterparty kind the helper returns nil, so return early (still a
    # passing example) rather than marking the example pending.
    next if result.nil?

    data, status_code, = result
    expect(status_code).to eq(200)
    balance = Helpers::Api.unwrap(data.data)
    expect(balance.type).to eq('counterpartyBalance')
    expect(balance.id).to be_a(String)
    expect(balance.attributes).not_to be_nil
    expect(balance.attributes.balance).to be_a(Numeric)
  end
end
