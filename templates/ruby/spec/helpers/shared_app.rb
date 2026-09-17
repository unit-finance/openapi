# Shared business application, the Ruby analogue of Node's `sharedApp.ts` and
# Python's `shared_app.py`.
#
# Lazily creates one Business application that downstream specs (get_by_id,
# update, update_beneficial_owner) reuse. RSpec runs in a single process, so
# this module-level cache is shared across spec files within a run.
#
# The create response is read from the raw body (`debug_return_type: 'String'`)
# rather than the typed model. Since spec 0.10.0 the response compound-includes
# `ApplicationDocument` resources, and the sandbox returns their spec-`required`
# attributes (e.g. `name`) as null. The generated Ruby setter raises
# `ArgumentError, 'name cannot be nil'` during deserialization, so the typed
# path fails before any spec runs. Node (axios) does not validate; this is a
# spec defect owned by the `unit-openapi` repo.

require 'json'
require_relative 'api'
require_relative 'fixtures'

module Helpers
  module SharedApp
    @cached = nil

    module_function

    def get_or_create
      return @cached if @cached

      api = Helpers::Api.build_api
      body, status_code, = api.create_application_with_http_info(
        Helpers::Fixtures.business_application_request, debug_return_type: 'String'
      )
      raise "Expected 201 creating shared business application, got #{status_code}" unless status_code == 201

      created = JSON.parse(body)['data']

      # Beneficial owners are not compound-included on the create response
      # (`included` carries application documents, not owners); only their
      # resource identifiers are exposed, via the business application's
      # `beneficialOwners` relationship. Read the id from there.
      beneficial_owner_id = nil
      bo_data = created.dig('relationships', 'beneficialOwners', 'data')
      beneficial_owner_id = bo_data.first['id'] if bo_data && !bo_data.empty?

      @cached = {
        id: created['id'],
        type: created['type'],
        beneficial_owner_id: beneficial_owner_id
      }
    end
  end
end
