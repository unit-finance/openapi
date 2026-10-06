require 'helpers/api'
require 'helpers/shared_account'

RSpec.describe 'get_bank_verification_pdf', :sandbox do
  it 'downloads the bank verification PDF for an account' do
    shared = Helpers::SharedAccount.get_or_create

    api = Helpers::Api.build_statements_api
    data, status_code, = api.get_bank_verification_pdf_with_http_info(
      shared[:account_id], include_proof_of_funds: 'false'
    )

    expect(status_code).to eq(200)
    expect(data).not_to be_nil
  end
end
