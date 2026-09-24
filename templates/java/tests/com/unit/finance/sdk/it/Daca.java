package com.unit.finance.sdk.it;

import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.api.DacaApi;

/** DACA state provisioning, mirroring the Node {@code tests/helpers/daca.ts}. */
final class Daca {

  enum State {
    NONE,
    ENTERED,
    ACTIVATED
  }

  private Daca() {}

  /**
   * A dedicated deposit account already advanced through the DACA transitions
   * that must precede the one under test. {@code activate} requires the account
   * to be {@code Entered} and {@code deactivate} requires it to be
   * {@code Activated}; otherwise the API rejects the call with 400
   * {@code invalid_daca_status_transition}. Each suite takes its own account so
   * the transitions never depend on Surefire's execution order.
   */
  static String createAccountInState(State state) throws ApiException, InterruptedException {
    String accountId = SharedAccount.createDedicatedDepositAccount().getId();
    if (state == State.NONE) {
      return accountId;
    }

    DacaApi api = ApiSupport.buildDacaApi();
    api.enterControlAgreement(accountId, Fixtures.updateDacaPoliciesRequest(accountId));
    if (state == State.ENTERED) {
      return accountId;
    }

    api.activateControlAgreement(accountId, Fixtures.updateDacaPoliciesRequest(accountId));
    return accountId;
  }
}
