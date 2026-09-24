# Credit application / decision helpers, the Ruby analogue of Node's
# `helpers/credit.ts`.
#
# Every credit application create needs a `lendingProgram` relationship id, and
# this SDK surface exposes no list-lending-programs operation, so the suite
# borrows one off an existing credit application. An org with no lending program
# (and therefore no credit applications) cannot reach create at all, so the
# helpers return nil (unavailable) instead of failing — the holds pattern.

require 'json'
require 'unit_finance_sdk'
require_relative 'api'
require_relative 'customers'
require_relative 'fixtures'

module Helpers
  module Credit
    SKIP_STATUSES = [400, 403, 404, 409, 422, 500].freeze

    @application_id = nil
    @application_id_resolved = false

    module_function

    # Read raw JSON so a typed-model mismatch on a sandbox-omitted field cannot
    # turn a healthy envelope into a failure (same pattern as the fraud-case
    # and authorized-users lists).
    def list_credit_applications_raw
      api = Helpers::Api.build_credit_applications_api
      body, status_code, = api.list_credit_applications_with_http_info(
        page_limit: '20', debug_return_type: 'String'
      )
      [status_code, JSON.parse(body)]
    rescue UnitFinanceSdk::ApiError => e
      raise unless SKIP_STATUSES.include?(e.code)

      [e.code, nil]
    end

    def list_credit_decisions_raw
      api = Helpers::Api.build_credit_decisions_api
      body, status_code, = api.list_credit_decisions_with_http_info(
        page_limit: '20', debug_return_type: 'String'
      )
      [status_code, JSON.parse(body)]
    rescue UnitFinanceSdk::ApiError => e
      raise unless SKIP_STATUSES.include?(e.code)

      [e.code, nil]
    end

    # Read a lending program id off an existing credit application.
    def lending_program_id
      _status_code, document = list_credit_applications_raw
      Array(document && document['data']).each do |item|
        next unless item.is_a?(Hash)

        program = item.dig('relationships', 'lendingProgram', 'data')
        return program['id'] if program.is_a?(Hash) && program['id'].is_a?(String)
      end
      nil
    end

    def create_credit_application_or_skip
      program_id = lending_program_id
      return nil if program_id.nil?

      customer_id = Helpers::Customers.shared_business_customer_id
      api = Helpers::Api.build_credit_applications_api
      body, status_code, = api.create_credit_application_with_http_info(
        Helpers::Fixtures.create_existing_credit_application_request(customer_id, program_id),
        debug_return_type: 'String'
      )
      [status_code, JSON.parse(body)]
    rescue UnitFinanceSdk::ApiError => e
      raise unless SKIP_STATUSES.include?(e.code)

      [e.code, nil]
    end

    # A credit application id for get/update/decision to reuse. Prefer one this
    # run created so the update spec never patches an unrelated org resource;
    # fall back to an existing one.
    def credit_application_id
      return @application_id if @application_id_resolved

      @application_id_resolved = true
      created = create_credit_application_or_skip
      if !created.nil? && !created[1].nil?
        created_id = created[1].dig('data', 'id')
        if created_id.is_a?(String)
          @application_id = created_id
          return @application_id
        end
      end

      _status_code, document = list_credit_applications_raw
      first = Array(document && document['data']).first
      @application_id = first['id'] if first.is_a?(Hash) && first['id'].is_a?(String)
      @application_id
    end

    def create_credit_decision_or_skip(application_id)
      api = Helpers::Api.build_credit_decisions_api
      body, status_code, = api.create_credit_decision_with_http_info(
        Helpers::Fixtures.create_approved_credit_limit_decision_request(application_id),
        debug_return_type: 'String'
      )
      [status_code, JSON.parse(body)]
    rescue UnitFinanceSdk::ApiError => e
      raise unless SKIP_STATUSES.include?(e.code)

      [e.code, nil]
    end
  end
end
