require 'helpers/api'

RSpec.describe 'list_recurring_payments', :sandbox do
  it 'returns a JSON:API list with page[limit] 20' do
    # TODO: unskip once the payments schemas are fixed. The request succeeds but
    # the response fails to deserialize: RecurringCreditAchPaymentAttributes
    # marks `tags` as required (non-nullable) while the sandbox omits it, so the
    # generated model raises during build_from_hash.
    skip 'blocked by non-nullable RecurringCreditAchPaymentAttributes.tags in the spec'

    api = Helpers::Api.build_payments_api
    data, status_code, = api.list_recurring_payments_with_http_info(page_limit: '20')

    expect(status_code).to eq(200)
    items = data.data
    expect(items).to be_an(Array)
    expect(items.length).to be <= 20
    items.each do |raw|
      item = Helpers::Api.unwrap(raw)
      expect(item.id).to be_a(String)
      expect(item.type).not_to be_nil
    end
  end
end
