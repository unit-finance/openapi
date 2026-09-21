# Card fraud outreach helpers, the Ruby analogue of Node's
# `helpers/cardFraudOutreach.ts`.
#
# CreatePolicy needs email/message outreach settings and a white-label theme
# that a typical sandbox org does not provision. There is also no list-policies
# operation, so get/update can only run after a successful create. Tests send
# placeholder relationship ids `'0'` and treat a 4xx/5xx as
# feature-unavailable — the send-link / holds pattern.
#
# Card fraud cases are inbound (the suite cannot mint one). List may be empty;
# get/mark then abort. Mark also needs a Pending case with numeric activity ids.
# List/get read the raw body via `debug_return_type: 'String'` because
# `FraudCaseCardActivityType` marks many fields required that the sandbox may
# omit (same pattern as authorized-users list).

require 'json'
require 'unit_finance_sdk'
require_relative 'api'
require_relative 'fixtures'

module Helpers
  module CardFraudOutreach
    SKIP_STATUSES = [400, 403, 404, 409, 410, 500].freeze

    @cached_policy = nil

    module_function

    def create_policy_or_skip
      api = Helpers::Api.build_card_fraud_outreach_api
      api.create_policy_with_http_info(Helpers::Fixtures.create_policy_request)
    rescue UnitFinanceSdk::ApiError => e
      raise unless SKIP_STATUSES.include?(e.code)

      nil
    end

    def get_or_create_policy
      return @cached_policy unless @cached_policy.nil?

      created = create_policy_or_skip
      return nil if created.nil?

      data, status_code, = created
      return nil if SKIP_STATUSES.include?(status_code)

      @cached_policy = Helpers::Api.unwrap(data.data)
    end

    def list_cases_raw
      api = Helpers::Api.build_card_fraud_outreach_api
      body, status_code, = api.list_card_fraud_cases_with_http_info(
        page_limit: '20', debug_return_type: 'String'
      )
      [status_code, JSON.parse(body)]
    rescue UnitFinanceSdk::ApiError => e
      raise unless SKIP_STATUSES.include?(e.code)

      [e.code, nil]
    end

    def get_case_raw(case_id)
      api = Helpers::Api.build_card_fraud_outreach_api
      body, status_code, = api.get_card_fraud_case_by_id_with_http_info(
        case_id, debug_return_type: 'String'
      )
      [status_code, JSON.parse(body)]
    rescue UnitFinanceSdk::ApiError => e
      raise unless SKIP_STATUSES.include?(e.code)

      [e.code, nil]
    end

    def pending_cases(items)
      Array(items).filter_map do |item|
        next unless item.is_a?(Hash) && item['id'].is_a?(String)

        attributes = item['attributes']
        decision = attributes.is_a?(Hash) ? attributes['decision'] : nil
        next if !decision.nil? && decision != 'Pending'

        activity_ids = []
        activities = attributes.is_a?(Hash) ? attributes['cardActivities'] : nil
        Array(activities).each do |activity|
          next unless activity.is_a?(Hash)

          begin
            activity_ids << Integer(activity['id'])
          rescue ArgumentError, TypeError
            next
          end
        end
        { id: item['id'], type: item['type'], activity_ids: activity_ids }
      end
    end
  end
end
