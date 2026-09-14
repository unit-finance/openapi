package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assumptions.assumeTrue;

import com.unit.finance.sdk.api.CheckDepositsApi;
import com.unit.finance.sdk.model.CheckDeposit;
import org.junit.jupiter.api.Test;

/** Mirrors {@code check-deposits/confirm.test.ts}. */
class ConfirmCheckDepositDetailsIT {

  @Test
  void confirmsACheckDepositAwaitingCustomerConfirmation() throws Exception {
    ApiSupport.assumeToken();
    CheckDeposit shared = CheckDeposits.getOrCreateShared();
    CheckDepositsApi api = ApiSupport.buildCheckDepositsApi();

    // `confirm` is only valid while the deposit is in
    // `AwaitingCustomerConfirmation`; when that precondition is not met the
    // helper returns null and the test is skipped.
    Integer status = CheckDeposits.confirmOrSkip(api, shared.getId());
    assumeTrue(status != null, "check deposit is not awaiting customer confirmation on this sandbox org");

    assertEquals(200, status.intValue());
  }
}
