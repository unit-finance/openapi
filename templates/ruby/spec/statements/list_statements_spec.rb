require 'helpers/api'
require 'helpers/statements'

RSpec.describe 'list_statements', :sandbox do
  # No page-size assertion: `/statements` accepts `page[limit]` but ignores it
  # -- the sandbox returns every statement of the period regardless. That is an
  # API/spec mismatch owned by `unit-openapi`, so the example asserts envelope
  # shape only.
  it 'returns a JSON:API list' do
    statements, status_code = Helpers::Statements.list_raw

    expect(status_code).to eq(200)
    expect(statements).to be_an(Array)
    statements.each do |statement|
      expect(statement['id']).to be_a(String)
      expect(statement['type']).to eq(Helpers::Statements::TYPE)
      expect(statement['attributes']).not_to be_nil
    end
  end
end
