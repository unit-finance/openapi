require 'json'
require 'helpers/api'
require 'helpers/credit'

RSpec.describe 'get_credit_decision', :sandbox do
  it 'fetches a credit decision by id' do
    # Decisions can only be created against a credit application, which needs a
    # lending program this org may not have; with an empty list there is
    # nothing to GET.
    _list_status, list_document = Helpers::Credit.list_credit_decisions_raw
    first = Array(list_document && list_document['data']).first
    next unless first.is_a?(Hash) && first['id'].is_a?(String)

    api = Helpers::Api.build_credit_decisions_api
    body, status_code, = api.get_credit_decision_with_http_info(
      first['id'],
      header_params: Helpers::Api::VND_API_JSON_HEADERS.dup,
      debug_return_type: 'String'
    )
    document = JSON.parse(body)

    expect(status_code).to eq(200)
    expect(document.dig('data', 'id')).to eq(first['id'])
    expect(document.dig('data', 'type')).to be_a(String)
    expect(document['data']).to have_key('attributes')
  end
end
