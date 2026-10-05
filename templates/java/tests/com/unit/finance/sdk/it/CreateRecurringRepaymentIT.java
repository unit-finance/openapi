package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

class CreateRecurringRepaymentIT {

  @Test
  void createsARecurringBookRepayment() throws Exception {
    ApiSupport.assumeToken();

    Object recurring = Repayments.createRecurringRepaymentOrSkip();
    if (recurring == null) {
      return;
    }

    assertTrue(
        Repayments.RECURRING_REPAYMENT_TYPES.contains(ApiSupport.jsonApiType(recurring)),
        "unexpected recurring repayment type " + ApiSupport.jsonApiType(recurring));
    assertNotNull(ApiSupport.jsonApiId(recurring));
  }
}
