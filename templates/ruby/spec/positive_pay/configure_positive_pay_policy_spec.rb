require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

# Skipped: the sandbox does not route `POST /positive-pay-policy` at all. It
# answers every request -- including a spec-valid one -- with 404 "Please check
# the path, we don't serve any resource at the specified path", so the
# operation exists only in the spec. Re-enable once the sandbox serves the
# path, or once `unit-openapi` drops the operation.
RSpec.describe 'configure_positive_pay_policy', :sandbox do
  it 'opts an account in to check-payment positive pay',
     skip: "Sandbox does not serve POST /positive-pay-policy (404 unknown path)." do
    account_id = Helpers::SharedAccount.get_or_create[:account_id]
    api = Helpers::Api.build_positive_pay_api

    _data, status_code, = api.configure_positive_pay_policy_with_http_info(
      Helpers::Fixtures.configure_positive_pay_policy_request(account_id)
    )

    expect(status_code).to eq(200)
  end
end
