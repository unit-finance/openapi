require 'helpers/api'
require 'helpers/lending_programs'

RSpec.describe 'get_lending_program_extended_information_by_id', :sandbox do
  it 'reads the extended information for a lending program' do
    program_id = Helpers::LendingPrograms.first_id_or_skip
    next if program_id.nil?

    api = Helpers::Api.build_lending_programs_api
    data, status_code, =
      api.get_lending_program_extended_information_by_id_with_http_info(program_id)

    expect(status_code).to eq(200)
    extended = Helpers::Api.unwrap(data.data)
    expect(extended.id).to eq(program_id)
    expect(extended.type).to eq('lendingProgramExtendedInformation')
    expect(extended.attributes).not_to be_nil
  end
end
