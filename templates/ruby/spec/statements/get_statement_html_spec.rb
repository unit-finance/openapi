require 'helpers/api'
require 'helpers/statements'

RSpec.describe 'get_statement_html', :sandbox do
  it 'downloads a statement as HTML' do
    statement_id = Helpers::Statements.id_or_skip
    next if statement_id.nil?

    api = Helpers::Api.build_statements_api
    data, status_code, = api.get_statement_html_with_http_info(statement_id)

    expect(status_code).to eq(200)
    expect(data).to be_a(String)
  end
end
