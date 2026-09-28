# Receivables helpers, the Ruby analogue of Node's `helpers/receivables.ts`.

require_relative 'api'

module Helpers
  module Receivables
    module_function

    # `GET /receivables` as a raw JSON body, returning `[body, status_code]`.
    #
    # The typed call cannot complete: the spec marks `Receivable.attributes`
    # `originalAmount` / `remainingAmount` required, but the sandbox returns
    # `totalPrincipal` / `remainingPrincipal` instead, so neither arm of the
    # response `oneOf` matches and the generated builder raises "data cannot
    # be nil". Spec defect owned by `unit-openapi`; tracked in SLICES.md.
    def list_raw(page_limit = '20')
      Helpers::Api.raw_get('/receivables', 'page[limit]' => page_limit)
    end

    # The receivable array out of a raw list body. `data` is a `oneOf` of a
    # receivable array and a single balance resource; only the array form
    # carries ids.
    def items(body)
      data = body['data']
      data.is_a?(Array) ? data : []
    end

    # The id of an existing receivable, or nil when the sandbox org has none.
    # Receivables are produced by Unit's lending flows, not through the API --
    # this surface exposes only list and get -- so `get_receivable_by_id` has
    # nothing to read when the list comes back empty.
    def first_id_or_skip
      body, = list_raw('1')
      first = items(body).first
      if first.nil?
        warn 'No receivables exist on this sandbox org and the SDK has no ' \
             'create-receivable operation; skipping.'
        return nil
      end
      first['id']
    end

    # A one-day `since` / `until` window as full ISO-8601 instants.
    #
    # `GET /accrued-interest/total` rejects a missing range with 400 and
    # rejects plain `YYYY-MM-DD` dates with 400 `Invalid value`, so the filters
    # must be datetimes. The window is kept to a single day because wider
    # ranges make the sandbox hang past any sensible client timeout.
    def accrued_interest_window
      until_at = Time.now.utc
      since_at = until_at - (24 * 60 * 60)
      fmt = '%Y-%m-%dT%H:%M:%S.%LZ'
      [since_at.strftime(fmt), until_at.strftime(fmt)]
    end
  end
end
