require 'helpers/api'
require 'helpers/lending_programs'

RSpec.describe 'get_lending_program_by_id', :sandbox do
  it 'reads a single lending program resource' do
    program_id = Helpers::LendingPrograms.first_id_or_skip
    next if program_id.nil?

    api = Helpers::Api.build_lending_programs_api
    data, status_code, = api.get_lending_program_by_id_with_http_info(program_id)

    expect(status_code).to eq(200)
    program = Helpers::Api.unwrap(data.data)
    expect(program.id).to eq(program_id)
    expect(program.type).to be_a(String)
    expect(program.attributes.name).to be_a(String)
    expect(program.attributes.program_size_limit).to be_an(Integer)
  end
end
