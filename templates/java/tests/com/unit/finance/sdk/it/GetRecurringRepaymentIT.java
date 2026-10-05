package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.model.CreateRecurringRepayment201Response;
import org.junit.jupiter.api.Test;

class GetRecurringRepaymentIT {

  @Test
  void fetchesARecurringRepaymentById() throws Exception {
    ApiSupport.assumeToken();
    String recurringId = Repayments.getRecurringRepaymentId();
    if (recurringId == null) {
      return;
    }

    ApiResponse<CreateRecurringRepayment201Response> response =
        ApiSupport.buildRecurringRepaymentsApi().getRecurringRepaymentWithHttpInfo(recurringId);

    assertEquals(200, response.getStatusCode());
    Object recurring = response.getData().getData();
    assertEquals(recurringId, ApiSupport.jsonApiId(recurring));
    assertTrue(
        Repayments.RECURRING_REPAYMENT_TYPES.contains(ApiSupport.jsonApiType(recurring)),
        "unexpected recurring repayment type " + ApiSupport.jsonApiType(recurring));
    assertNotNull(recurring);
  }
}
