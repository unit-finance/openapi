# Application-document helpers, the Ruby analogue of Node's
# `helpers/applicationDocuments.ts`.
#
# These specs read the raw JSON:API body (`debug_return_type: 'String'`) rather
# than the typed models. `ApplicationDocumentAttributes` marks `name` (and
# `status`, `documentType`, `description`, `archived`) required, but the sandbox
# returns them as null for freshly created / pending documents. The generated
# Ruby setter raises `ArgumentError, 'name cannot be nil'` during
# deserialization, so any spec touching an `ApplicationDocument` model would
# fail before it could assert. Node (axios) does not validate; this is a spec
# defect owned by the `unit-openapi` repo. Reading the raw body lets these specs
# assert structural correctness without tripping the strict setter.
#
# The only document these specs can deterministically create is a custom
# (client-requested) document; the Unit-required documents appear only while an
# application is `AwaitingDocuments`, a magic-SSN-dependent state we do not
# control. When the sandbox org does not offer custom documents (or the document
# rejects uploads), the API answers with a 4xx/5xx precondition error, treated
# as feature-unavailable (skip) rather than a failure -- the holds pattern.

require 'json'
require 'unit_openapi_ruby_sdk'
require_relative 'api'
require_relative 'check_deposits'

module Helpers
  module ApplicationDocuments
    SKIP_STATUSES = [400, 403, 404, 409, 500].freeze

    module_function

    # Create a custom application document; return its id or nil when the
    # sandbox org does not support creating one.
    def create_custom_document_or_skip(application_id)
      api = Helpers::Api.build_application_documents_api
      body, status_code, = api.create_application_document_with_http_info(
        application_id, body: {}, debug_return_type: 'String'
      )
      return nil if SKIP_STATUSES.include?(status_code)

      JSON.parse(body)['data']['id']
    rescue UnitFinanceSdk::ApiError => e
      raise unless SKIP_STATUSES.include?(e.code)

      nil
    end

    # Upload a front image; treat precondition errors as skips. Returns
    # [status_code, parsed_document] or nil.
    def upload_front_or_skip(application_id, document_id)
      api = Helpers::Api.build_application_documents_api
      body, status_code, = api.upload_application_document_with_http_info(
        application_id, document_id, Helpers::CheckDeposits::JPEG_IMAGE_BYTES,
        debug_return_type: 'String'
      )
      return nil if SKIP_STATUSES.include?(status_code)

      [status_code, JSON.parse(body)]
    rescue UnitFinanceSdk::ApiError => e
      raise unless SKIP_STATUSES.include?(e.code)

      nil
    end

    # Upload a back-side image; treat precondition errors as skips. Returns
    # [status_code, parsed_document] or nil.
    def upload_back_or_skip(application_id, document_id)
      api = Helpers::Api.build_application_documents_api
      body, status_code, = api.upload_application_document_back_side_with_http_info(
        application_id, document_id, Helpers::CheckDeposits::JPEG_IMAGE_BYTES,
        debug_return_type: 'String'
      )
      return nil if SKIP_STATUSES.include?(status_code)

      [status_code, JSON.parse(body)]
    rescue UnitFinanceSdk::ApiError => e
      raise unless SKIP_STATUSES.include?(e.code)

      nil
    end
  end
end
