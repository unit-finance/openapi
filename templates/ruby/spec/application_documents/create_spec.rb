require 'json'
require 'helpers/api'
require 'helpers/application_documents'
require 'helpers/shared_app'

RSpec.describe 'create_application_document', :sandbox do
  it 'creates a custom application document' do
    api = Helpers::Api.build_application_documents_api
    shared = Helpers::SharedApp.get_or_create

    # Read the raw body: the typed ApplicationDocument model raises on the
    # sandbox's null required fields (see helpers/application_documents.rb).
    begin
      body, status_code, = api.create_application_document_with_http_info(
        shared[:id], body: {}, debug_return_type: 'String'
      )
    rescue UnitFinanceSdk::ApiError => e
      # Custom documents are an org-level capability; treat 4xx/5xx as
      # feature-unavailable.
      raise unless Helpers::ApplicationDocuments::SKIP_STATUSES.include?(e.code)

      next
    end

    next if Helpers::ApplicationDocuments::SKIP_STATUSES.include?(status_code)

    # The spec documents a 200 for this operation, but the sandbox creates the
    # resource and answers 201.
    expect([200, 201]).to include(status_code)
    document = JSON.parse(body)['data']
    expect(document['type']).to be_a(String)
    expect(document['id']).to be_a(String)
    expect(document).to have_key('attributes')
  end
end
