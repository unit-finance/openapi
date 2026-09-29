require 'tempfile'

require 'helpers/api'
require 'helpers/positive_pay'

RSpec.describe 'upload_positive_pay_document', :sandbox do
  # The smallest byte sequence the sandbox accepts as an `application/pdf` body.
  MINIMAL_PDF = "%PDF-1.4\n1 0 obj<</Type/Catalog>>endobj\ntrailer<</Root 1 0 R>>\n%%EOF\n".freeze

  it 'activates a drawdown rule by uploading its document' do
    # Only the drawdown variant is created `AwaitingDocuments`; the other two
    # are already `Active` and answer this upload with 400.
    positive_pay_id = Helpers::PositivePay.create_wire_drawdown_rule_id
    api = Helpers::Api.build_positive_pay_api

    file = Tempfile.new(['positive-pay', '.pdf'])
    begin
      file.binmode
      file.write(MINIMAL_PDF)
      file.flush
      file.rewind

      _data, status_code, = api.upload_positive_pay_document_with_http_info(
        positive_pay_id,
        file
      )

      expect(status_code).to eq(200)
    ensure
      file.close
      file.unlink
    end
  end
end
