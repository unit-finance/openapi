require 'helpers/api'
require 'helpers/tax_forms'

RSpec.describe 'get_tax_form_pdf_by_id', :sandbox do
  it 'downloads a tax form as PDF' do
    tax_form_id = Helpers::TaxForms.id_or_skip
    next if tax_form_id.nil?

    api = Helpers::Api.build_tax_forms_api
    data, status_code, = api.get_tax_form_pdf_by_id_with_http_info(tax_form_id)

    expect(status_code).to eq(200)
    expect(data).not_to be_nil
  end
end
