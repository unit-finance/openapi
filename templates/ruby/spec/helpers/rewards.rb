# Reward helpers, the Ruby analogue of Node's `helpers/rewards.ts` and
# Python's `helpers/rewards.py`.

require 'unit_openapi_ruby_sdk'
require_relative 'api'
require_relative 'capabilities'
require_relative 'fixtures'
require_relative 'shared_account'

module Helpers
  module Rewards
    module_function

    # Create a reward, or nil when the org has no rewards program. Rewards are
    # funded from an org-level reward account that is provisioned per bank
    # agreement and cannot be created from the API, so an org without one
    # answers the create with 4xx/5xx -- feature-unavailable, not a bad request.
    def create_or_skip
      shared = Helpers::SharedAccount.get_or_create
      api = Helpers::Api.build_rewards_api
      data, status_code, = api.create_reward_with_http_info(
        Helpers::Fixtures.create_reward_request(shared[:account_id])
      )
      raise "Failed to create reward: expected status 201, got #{status_code}." unless status_code == 201

      Helpers::Api.unwrap(data.data)
    rescue UnitFinanceSdk::ApiError => e
      raise unless Helpers::Capabilities.capability_error?(e)

      warn "Rewards are not provisioned on this sandbox org; skipping. #{Helpers::Capabilities.error_body(e)}"
      nil
    end

    # A reward id for the read suite. Prefers one this run created; falls back
    # to an existing reward so the read is still covered on an org that cannot
    # create. nil when neither is available.
    def id_or_skip
      created = create_or_skip
      return created.id if created

      api = Helpers::Api.build_rewards_api
      data, = api.list_rewards_with_http_info(page_limit: '1')
      first = Array(data.data).first
      first.nil? ? nil : Helpers::Api.unwrap(first).id
    end
  end
end
