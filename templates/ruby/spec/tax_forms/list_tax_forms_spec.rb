require 'helpers/api'

RSpec.describe 'list_tax_forms', :sandbox do
  it 'returns a JSON:API list of tax forms' do
    api = Helpers::Api.build_tax_forms_api

    data, status_code, = api.list_tax_forms_with_http_info

    expect(status_code).to eq(200)
    Array(data.data).each do |item|
      tax_form = Helpers::Api.unwrap(item)
      expect(tax_form.id).to be_a(String)
      expect(tax_form.type).to eq('taxForm')
      expect(tax_form.attributes).not_to be_nil
    end
  end
end
