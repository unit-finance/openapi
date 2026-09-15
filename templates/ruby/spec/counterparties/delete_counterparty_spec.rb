require 'helpers/api'
require 'helpers/counterparties'

RSpec.describe 'delete_counterparty', :sandbox do
  it 'creates a dedicated counterparty then deletes it' do
    counterparty = Helpers::Counterparties.create_dedicated
    api = Helpers::Api.build_counterparties_api

    _data, status_code, = api.delete_counterparty_with_http_info(counterparty.id)

    # The spec documents 204 for DELETE /counterparties/{id}; the sandbox
    # answers 200 with an empty body.
    expect([200, 204]).to include(status_code)
  end
end
