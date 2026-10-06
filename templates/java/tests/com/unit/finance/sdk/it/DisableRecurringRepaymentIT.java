package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.model.CreateRecurringRepayment201Response;
import org.junit.jupiter.api.Test;

class DisableRecurringRepaymentIT {

  @Test
  void disablesARecurringRepayment() throws Exception {
    ApiSupport.assumeToken();
    Object recurring = Repayments.createRecurringRepaymentOrSkip();
    if (recurring == null) {
      return;
    }
    String recurringId = ApiSupport.jsonApiId(recurring);

    ApiResponse<CreateRecurringRepayment201Response> response =
        ApiSupport.buildRecurringRepaymentsApi()
            .disableRecurringRepaymentWithHttpInfo(recurringId, null);

    assertEquals(200, response.getStatusCode());
    Object disabled = response.getData().getData();
    assertEquals(recurringId, ApiSupport.jsonApiId(disabled));
    assertTrue(
        Repayments.RECURRING_REPAYMENT_TYPES.contains(ApiSupport.jsonApiType(disabled)),
        "unexpected recurring repayment type " + ApiSupport.jsonApiType(disabled));
    assertNotNull(disabled);
  }
}
