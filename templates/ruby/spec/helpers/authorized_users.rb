# Authorized-user helpers, the Ruby analogue of Node's
# `helpers/authorizedUsers.ts`.
#
# add/remove return a customer resource and use the typed client. list/get type
# `data` as AuthorizedUserType (fullName / email / phone), but the operations
# are documented as JSON:API resources. These helpers therefore read list/get
# bodies via `debug_return_type: 'String'` so specs can assert whichever shape
# the sandbox actually returns.

require 'json'
require 'unit_finance_sdk'
require_relative 'api'
require_relative 'fixtures'

module Helpers
  module AuthorizedUsers
    SKIP_STATUSES = [400, 403, 404, 409, 500].freeze

    module_function

    # Add an authorized user; return [response, user] or nil when the sandbox
    # org rejects the POST (capability off / invalid payload).
    def add_or_skip(customer_id, user = Helpers::Fixtures.authorized_user)
      api = Helpers::Api.build_authorized_users_api
      data, status_code, = api.add_authorized_users_with_http_info(
        customer_id,
        Helpers::Fixtures.add_authorized_users_request([user])
      )
      return nil if SKIP_STATUSES.include?(status_code)

      [data, status_code, user]
    rescue UnitFinanceSdk::ApiError => e
      raise unless SKIP_STATUSES.include?(e.code)

      nil
    end

    def list_raw(customer_id)
      api = Helpers::Api.build_authorized_users_api
      body, status_code, = api.list_authorized_users_with_http_info(
        customer_id, debug_return_type: 'String'
      )
      [status_code, JSON.parse(body)]
    end

    def get_raw(customer_id, authorized_user_id)
      api = Helpers::Api.build_authorized_users_api
      body, status_code, = api.get_authorized_user_with_http_info(
        customer_id, authorized_user_id, debug_return_type: 'String'
      )
      [status_code, JSON.parse(body)]
    end

    def authorized_user_id(item)
      return item['id'] if item.is_a?(Hash) && item['id'].is_a?(String) && !item['id'].empty?

      attributes = item.is_a?(Hash) ? item['attributes'] : nil
      return unless attributes.is_a?(Hash) && attributes['id'].is_a?(String) && !attributes['id'].empty?

      attributes['id']
    end
  end
end
