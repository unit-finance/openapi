require 'helpers/api'
require 'helpers/application_documents'
require 'helpers/shared_app'

RSpec.describe 'download_application_document_back_side', :sandbox do
  it 'downloads an application document back-side file' do
    api = Helpers::Api.build_application_documents_api
    shared = Helpers::SharedApp.get_or_create

    document_id = Helpers::ApplicationDocuments.create_custom_document_or_skip(shared[:id])
    next if document_id.nil?

    # A back-side file must be uploaded before it can be downloaded.
    next if Helpers::ApplicationDocuments.upload_back_or_skip(shared[:id], document_id).nil?

    begin
      data, status_code, = api.download_application_document_back_side_with_http_info(shared[:id], document_id)
    rescue UnitFinanceSdk::ApiError => e
      raise unless Helpers::ApplicationDocuments::SKIP_STATUSES.include?(e.code)

      next
    end

    expect(status_code).to eq(200)
    expect(data).not_to be_nil
  end
end
