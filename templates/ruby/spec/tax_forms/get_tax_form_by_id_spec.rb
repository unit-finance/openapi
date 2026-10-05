require 'helpers/api'
require 'helpers/tax_forms'

RSpec.describe 'get_tax_form_by_id', :sandbox do
  it 'fetches a tax form by id' do
    tax_form_id = Helpers::TaxForms.id_or_skip
    next if tax_form_id.nil?

    api = Helpers::Api.build_tax_forms_api
    data, status_code, = api.get_tax_form_by_id_with_http_info(tax_form_id)

    expect(status_code).to eq(200)
    tax_form = Helpers::Api.unwrap(data.data)
    expect(tax_form.id).to eq(tax_form_id)
    expect(tax_form.type).to eq('taxForm')
    expect(tax_form.attributes).not_to be_nil
  end
end
