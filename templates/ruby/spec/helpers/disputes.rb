# Dispute lookup helpers, the Ruby analogue of Node's `helpers/disputes.ts`.

require_relative 'api'

module Helpers
  module Disputes
    module_function

    # The id of an existing dispute, or nil when the sandbox org has none.
    # Disputes are opened by Unit operations, not through the API -- this
    # surface exposes only list and get -- so `get_dispute_by_id` has nothing to
    # read when the list comes back empty.
    def first_id_or_skip
      data, = Helpers::Api.build_disputes_api.list_disputes_with_http_info(page_limit: '1')
      first = data.data&.first
      if first.nil?
        warn 'No disputes exist on this sandbox org and the SDK has no create-dispute operation; skipping.'
        return nil
      end
      first.id
    end
  end
end
