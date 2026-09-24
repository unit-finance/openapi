require 'helpers/api'
require 'helpers/credit'

RSpec.describe 'create_credit_decision', :sandbox do
  it 'records an approved credit limit decision' do
    application_id = Helpers::Credit.credit_application_id
    next if application_id.nil?

    created = Helpers::Credit.create_credit_decision_or_skip(application_id)
    status_code, document = created
    next if document.nil? || Helpers::Credit::SKIP_STATUSES.include?(status_code)

    expect(status_code).to eq(201)
    expect(document.dig('data', 'id')).to be_a(String)
    expect(document.dig('data', 'type')).to be_a(String)
    expect(document['data']).to have_key('attributes')
  end
end
