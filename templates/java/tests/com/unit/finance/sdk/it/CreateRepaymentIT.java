package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

class CreateRepaymentIT {

  @Test
  void createsABookRepaymentAgainstACreditAccount() throws Exception {
    ApiSupport.assumeToken();

    Object repayment = Repayments.createBookRepaymentOrSkip();
    if (repayment == null) {
      return;
    }

    assertTrue(
        Repayments.REPAYMENT_TYPES.contains(ApiSupport.jsonApiType(repayment)),
        "unexpected repayment type " + ApiSupport.jsonApiType(repayment));
    assertNotNull(ApiSupport.jsonApiId(repayment));
  }
}
