# Tax-form helpers, the Ruby analogue of Node's `helpers/taxForms.ts` and
# Python's `helpers/tax_forms.py`.

require_relative 'api'

module Helpers
  module TaxForms
    module_function

    # A tax form id, or nil when the org has none.
    #
    # Tax forms are issued by Unit once a year per customer; there is no
    # operation to create one, so a sandbox org that has not crossed a tax year
    # has nothing for the single-form read and the PDF download to address.
    def id_or_skip
      api = Helpers::Api.build_tax_forms_api
      data, = api.list_tax_forms_with_http_info
      first = Array(data.data).first
      if first.nil?
        warn 'This sandbox org has no tax forms (they are issued annually and ' \
             'cannot be created from the API); skipping.'
        return nil
      end
      Helpers::Api.unwrap(first).id
    end
  end
end
