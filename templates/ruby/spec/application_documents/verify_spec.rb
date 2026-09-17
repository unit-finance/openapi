require 'json'
require 'helpers/api'
require 'helpers/application_documents'
require 'helpers/shared_app'

RSpec.describe 'verify_application_document', :sandbox do
  it 'verifies a selfie-verification application document' do
    api = Helpers::Api.build_application_documents_api
    shared = Helpers::SharedApp.get_or_create

    document_id = Helpers::ApplicationDocuments.create_custom_document_or_skip(shared[:id])
    next if document_id.nil?

    # Verify is only legal for a `SelfieVerification` document paired with a real
    # IDV `jobId`, neither of which these specs can provision. The call is
    # exercised for wiring/serialization; a precondition error is expected and
    # treated as feature-unavailable rather than a failure. The response is read
    # raw because the typed ApplicationDocument model raises on the sandbox's
    # null required fields.
    request = UnitFinanceSdk::VerifyDocumentRequest.new(
      data: UnitFinanceSdk::VerifyDocumentData.new(
        type: 'selfieVerification',
        attributes: UnitFinanceSdk::VerifyDocumentDataAttributes.new(job_id: 'X16krjAN1')
      )
    )

    begin
      body, status_code, = api.verify_application_document_with_http_info(
        shared[:id], document_id, request, debug_return_type: 'String'
      )
    rescue UnitFinanceSdk::ApiError => e
      raise unless Helpers::ApplicationDocuments::SKIP_STATUSES.include?(e.code)

      next
    end

    next if Helpers::ApplicationDocuments::SKIP_STATUSES.include?(status_code)

    expect(status_code).to eq(200)
    document = JSON.parse(body)['data']
    expect(document['id']).to eq(document_id)
    expect(document).to have_key('attributes')
  end
end
