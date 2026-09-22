# Check-payment helpers, the Ruby analogue of Node's `helpers/checkPayments.ts`.

require 'unit_finance_sdk'
require_relative 'api'
require_relative 'fixtures'
require_relative 'funding'
require_relative 'shared_account'

module Helpers
  module CheckPayments
    SKIP_STATUSES = [400, 403, 404, 409, 422, 500, 501].freeze

    module_function

    def originate_or_skip(account_id, customer_id)
      Helpers::Funding.fund_account(account_id, 1000)
      api = Helpers::Api.build_check_payments_api
      api.originate_check_payment_mail_physical_check_with_http_info(
        Helpers::Fixtures.originate_check_payment_request(account_id, customer_id)
      )
    rescue UnitFinanceSdk::ApiError => e
      raise unless SKIP_STATUSES.include?(e.code)

      nil
    rescue ArgumentError
      nil
    end

    def get_or_create_shared_check_payment
      @shared ||= begin
        shared = Helpers::SharedAccount.get_or_create
        created = originate_or_skip(shared[:account_id], shared[:customer_id])
        created.nil? ? :missing : Helpers::Api.unwrap(created[0].data)
      end
      @shared == :missing ? nil : @shared
    end

    def get_check_image_or_skip(check_payment_id)
      Helpers::Api.build_check_payments_api.get_check_image_with_http_info(
        check_payment_id, 'front', 'printed'
      )
    rescue UnitFinanceSdk::ApiError => e
      raise unless SKIP_STATUSES.include?(e.code)

      nil
    end

    def cancel_or_skip(check_payment_id)
      Helpers::Api.build_check_payments_api.cancel_check_payment_with_http_info(
        check_payment_id
      )
    rescue UnitFinanceSdk::ApiError => e
      raise unless SKIP_STATUSES.include?(e.code)

      nil
    end

    def return_or_skip(check_payment_id)
      Helpers::Api.build_check_payments_api.return_check_payment_with_http_info(
        check_payment_id,
        Helpers::Fixtures.return_check_payment_request
      )
    rescue UnitFinanceSdk::ApiError => e
      raise unless SKIP_STATUSES.include?(e.code)

      nil
    end

    def approve_or_skip(check_payment_id)
      Helpers::Api.build_check_payments_api.approve_check_payment_additional_verification_with_http_info(
        check_payment_id,
        Helpers::Fixtures.approve_check_payment_additional_verification_request
      )
    rescue UnitFinanceSdk::ApiError => e
      raise unless SKIP_STATUSES.include?(e.code)

      nil
    end
  end
end
