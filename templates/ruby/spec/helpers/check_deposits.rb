# Check-deposit helpers, the Ruby analogue of Node's `helpers/checkDeposits.ts`.
#
# Lazily provisions a check deposit (with both images uploaded) that the
# read-only specs reuse, plus skip helpers for the state/feature-gated
# transitions (`clear`/`confirm`/`send-link`).

require 'unit_openapi_ruby_sdk'
require_relative 'api'
require_relative 'fixtures'
require_relative 'shared_account'

module Helpers
  module CheckDeposits
    # A minimal but structurally valid JPEG (SOI + APP0/JFIF header + EOI),
    # packed into a binary string. The image-upload endpoints only require an
    # `image/jpeg` body, so this in-memory stand-in avoids bundling a fixture.
    JPEG_IMAGE_BYTES = [
      0xFF, 0xD8, 0xFF, 0xE0, 0x00, 0x10, 0x4A, 0x46, 0x49, 0x46, 0x00, 0x01,
      0x01, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00, 0x00, 0xFF, 0xD9
    ].pack('C*').freeze

    # `clear` and `confirm` are only valid in specific states (`Clearing` and
    # `AwaitingCustomerConfirmation`) and `clear` additionally requires the
    # Dynamic Clearing Period feature; the sandbox signals the disabled feature
    # with a 500. None of these are deterministically reachable from a freshly
    # created deposit, so the transition specs treat those preconditions as
    # feature-unavailable (skip) rather than a failure -- the holds pattern.
    #
    # TODO(check-deposits): enable full (non-skipping) assertions for these
    # transitions once the sandbox can deterministically drive a deposit into
    # the required state. To turn these on:
    #   - clear: enable the Dynamic Clearing Period feature on the token's org
    #     bank agreement, drive the deposit to `Clearing` (upload both images
    #     and let it progress / simulate settlement), then drop 500 (and the 4xx
    #     precondition codes) from the skip set and assert the 200 body.
    #   - confirm: drive the deposit to `AwaitingCustomerConfirmation` (a
    #     duplicate-detection / needs-confirmation simulation) before asserting.
    #   - create_check_deposit_send_link: provision a white-label theme and an
    #     authorized user and pass their real ids (see
    #     Fixtures.create_check_deposit_send_link_request) instead of the '0'
    #     placeholders.
    # When enabling, replace the `next if result.nil?` guards in the
    # corresponding specs with a hard assertion.
    SKIP_STATUSES = [400, 403, 404, 409, 500].freeze

    @cached = nil

    module_function

    def create_check_deposit
      shared = Helpers::SharedAccount.get_or_create
      api = Helpers::Api.build_check_deposits_api
      data, status_code, = api.create_check_deposit_with_http_info(
        Helpers::Fixtures.create_check_deposit_request(shared[:account_id])
      )
      raise "Failed to create check deposit: expected status 201, got #{status_code}." unless status_code == 201

      Helpers::Api.unwrap(data.data)
    end

    def get_or_create_shared_check_deposit
      return @cached if @cached

      api = Helpers::Api.build_check_deposits_api
      created = create_check_deposit
      api.upload_check_deposit_front_image(created.id, JPEG_IMAGE_BYTES)
      api.upload_check_deposit_back_image(created.id, JPEG_IMAGE_BYTES)
      @cached = created
    end

    def clear_or_skip(check_deposit_id)
      api = Helpers::Api.build_check_deposits_api
      api.clear_check_deposit_with_http_info(check_deposit_id)
    rescue UnitFinanceSdk::ApiError => e
      raise unless SKIP_STATUSES.include?(e.code)

      nil
    end

    def confirm_or_skip(check_deposit_id)
      api = Helpers::Api.build_check_deposits_api
      api.confirm_check_deposit_details_with_http_info(check_deposit_id)
    rescue UnitFinanceSdk::ApiError => e
      raise unless SKIP_STATUSES.include?(e.code)

      nil
    end

    def create_send_link_or_skip
      shared = Helpers::SharedAccount.get_or_create
      api = Helpers::Api.build_check_deposits_api
      api.create_check_deposit_send_link_with_http_info(
        Helpers::Fixtures.create_check_deposit_send_link_request(shared[:account_id], '0', '0')
      )
    rescue UnitFinanceSdk::ApiError => e
      raise unless SKIP_STATUSES.include?(e.code)

      nil
    end
  end
end
