require 'json'
require 'helpers/api'
require 'helpers/shared_app'

RSpec.describe 'list_application_documents', :sandbox do
  it 'returns a JSON:API list of application documents' do
    api = Helpers::Api.build_application_documents_api
    shared = Helpers::SharedApp.get_or_create

    # Read the raw body: ApplicationDocumentAttributes marks fields required
    # that the sandbox returns null, so the typed model raises on
    # deserialization (see helpers/application_documents.rb). Spec defect owned
    # by unit-openapi.
    body, status_code, = api.list_application_documents_with_http_info(
      shared[:id], debug_return_type: 'String'
    )

    expect(status_code).to eq(200)
    items = JSON.parse(body)['data']
    expect(items).to be_an(Array)
    items.each do |doc|
      expect(doc['type']).to be_a(String)
      expect(doc['id']).to be_a(String)
      expect(doc).to have_key('attributes')
    end
  end
end
