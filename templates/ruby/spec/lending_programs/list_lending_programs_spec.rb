require 'helpers/api'

RSpec.describe 'list_lending_programs', :sandbox do
  it 'returns a JSON:API list with page_limit=20' do
    api = Helpers::Api.build_lending_programs_api

    data, status_code, = api.list_lending_programs_with_http_info(page_limit: '20')

    expect(status_code).to eq(200)
    items = data.data
    expect(items).to be_an(Array)
    expect(items.length).to be <= 20
    items.each do |item|
      program = Helpers::Api.unwrap(item)
      expect(program.id).to be_a(String)
      # The program `type` is open-ended in the spec, so assert it is present
      # rather than pinning a literal.
      expect(program.type).to be_a(String)
      expect(program.attributes).not_to be_nil
      expect(program.attributes.name).to be_a(String)
    end
  end
end
