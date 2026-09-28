# Lending-program lookup helpers, the Ruby analogue of Node's
# `helpers/lendingPrograms.ts`.

require_relative 'api'

module Helpers
  module LendingPrograms
    module_function

    # The id of an existing lending program, or nil when the sandbox org has
    # none. Lending programs are provisioned by Unit, not through the API --
    # this surface exposes only list and the two reads -- so the by-id
    # operations have nothing to read when the list comes back empty.
    def first_id_or_skip
      data, = Helpers::Api.build_lending_programs_api
                          .list_lending_programs_with_http_info(page_limit: '1')
      first = data.data&.first
      if first.nil?
        warn 'No lending programs exist on this sandbox org and the SDK has no ' \
             'create-lending-program operation; skipping.'
        return nil
      end
      Helpers::Api.unwrap(first).id
    end
  end
end
