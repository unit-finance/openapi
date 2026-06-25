# Shared business application, the Ruby analogue of Node's `sharedApp.ts` and
# Python's `shared_app.py`.
#
# Lazily creates one Business application that downstream specs (get_by_id,
# update, update_beneficial_owner) reuse. RSpec runs in a single process, so
# this module-level cache is shared across spec files within a run.

require_relative 'api'
require_relative 'fixtures'

module Helpers
  module SharedApp
    @cached = nil

    module_function

    def get_or_create
      return @cached if @cached

      api = Helpers::Api.build_api
      data, status_code, = api.create_application_with_http_info(
        Helpers::Fixtures.business_application_request
      )
      raise "Expected 201 creating shared business application, got #{status_code}" unless status_code == 201

      created = Helpers::Api.unwrap(data.data)

      # Beneficial owners are not compound-included on the create response
      # (`included` is empty); only their resource identifiers are exposed, via
      # the business application's `beneficial_owners` relationship. Read the id
      # from there.
      beneficial_owner_id = nil
      relationships = created.respond_to?(:relationships) ? created.relationships : nil
      beneficial_owners = relationships&.beneficial_owners
      if beneficial_owners&.data && !beneficial_owners.data.empty?
        beneficial_owner_id = beneficial_owners.data.first.id
      end

      @cached = {
        id: created.id,
        type: created.type,
        beneficial_owner_id: beneficial_owner_id
      }
    end
  end
end
