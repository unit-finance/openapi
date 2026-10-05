require 'helpers/api'
require 'helpers/statements'

RSpec.describe 'get_statement_pdf', :sandbox do
  it 'downloads a statement as PDF' do
    statement_id = Helpers::Statements.id_or_skip
    next if statement_id.nil?

    api = Helpers::Api.build_statements_api
    data, status_code, = api.get_statement_pdf_with_http_info(statement_id)

    expect(status_code).to eq(200)
    expect(data).not_to be_nil
  end
end
