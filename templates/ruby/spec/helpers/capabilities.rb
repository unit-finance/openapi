# Capability detection, the Ruby analogue of Node's `helpers/capabilities.ts`
# and Python's `helpers/capabilities.py`.
#
# The sandbox answers with these statuses when an operation is real but the org
# behind the token was never provisioned for it -- no credit terms, no rewards
# program, no statement history. Those are org configuration, not bad requests,
# so the helpers that hit them return nil (unavailable) and the calling example
# returns early instead of failing. Same pattern as `holds.rb` and `credit.rb`.

require 'unit_openapi_ruby_sdk'

module Helpers
  module Capabilities
    STATUSES = [400, 403, 404, 405, 409, 422, 500].freeze

    module_function

    def capability_error?(error)
      error.is_a?(UnitFinanceSdk::ApiError) && STATUSES.include?(error.code)
    end

    # The sandbox's error body, for the warning that explains a skip.
    def error_body(error)
      error.response_body.to_s
    end
  end
end
