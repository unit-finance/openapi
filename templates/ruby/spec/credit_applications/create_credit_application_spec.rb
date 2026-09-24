require 'helpers/api'
require 'helpers/credit'

RSpec.describe 'create_credit_application', :sandbox do
  it 'creates a credit application for an existing customer' do
    # Needs a real `lendingProgram` id, and this SDK surface has no
    # list-lending-programs operation; the helper borrows one off an existing
    # credit application and returns nil when the org has none.
    created = Helpers::Credit.create_credit_application_or_skip
    next if created.nil?

    status_code, document = created
    next if document.nil? || Helpers::Credit::SKIP_STATUSES.include?(status_code)

    expect(status_code).to eq(201)
    expect(document.dig('data', 'id')).to be_a(String)
    expect(document.dig('data', 'type')).to be_a(String)
    expect(document['data']).to have_key('attributes')
  end
end
