# DACA state provisioning, the Ruby analogue of Node's `helpers/daca.ts`.

require_relative 'api'
require_relative 'fixtures'
require_relative 'shared_account'

module Helpers
  module Daca
    module_function

    # A dedicated deposit account already advanced through the DACA transitions
    # that must precede the one under test. `activate` requires the account to
    # be `Entered` and `deactivate` requires it to be `Activated`; otherwise the
    # API rejects the call with 400 `invalid_daca_status_transition`. Each spec
    # takes its own account so the transitions never depend on example order.
    def create_account_in_state(state)
      account_id = Helpers::SharedAccount.create_dedicated_deposit_account.id
      return account_id if state == :none

      api = Helpers::Api.build_daca_api
      api.enter_control_agreement_with_http_info(
        account_id,
        body: Helpers::Fixtures.update_daca_policies_request(account_id)
      )
      return account_id if state == :entered

      api.activate_control_agreement_with_http_info(
        account_id,
        body: Helpers::Fixtures.update_daca_policies_request(account_id)
      )
      account_id
    end
  end
end
