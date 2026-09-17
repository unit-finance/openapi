require 'helpers/api'
require 'helpers/application_documents'
require 'helpers/shared_app'

RSpec.describe 'upload_application_document', :sandbox do
  it 'uploads an application document file' do
    shared = Helpers::SharedApp.get_or_create

    document_id = Helpers::ApplicationDocuments.create_custom_document_or_skip(shared[:id])
    next if document_id.nil?

    result = Helpers::ApplicationDocuments.upload_front_or_skip(shared[:id], document_id)
    next if result.nil?

    status_code, document = result
    expect(status_code).to eq(200)
    expect(document['data']['id']).to eq(document_id)
    expect(document['data']).to have_key('attributes')
  end
end
