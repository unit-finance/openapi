package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.RecurringRepaymentsApi;
import com.unit.finance.sdk.model.CreateRecurringRepayment201Response;
import org.junit.jupiter.api.Test;

class EnableRecurringRepaymentIT {

  @Test
  void reEnablesADisabledRecurringRepayment() throws Exception {
    ApiSupport.assumeToken();
    Object recurring = Repayments.createRecurringRepaymentOrSkip();
    if (recurring == null) {
      return;
    }
    String recurringId = ApiSupport.jsonApiId(recurring);

    // A recurring repayment is created `Active`, and `enable` is only valid
    // from `Disabled`, so this suite disables its own schedule first rather
    // than sharing one with the disable suite.
    RecurringRepaymentsApi api = ApiSupport.buildRecurringRepaymentsApi();
    api.disableRecurringRepaymentWithHttpInfo(recurringId, null);

    ApiResponse<CreateRecurringRepayment201Response> response =
        api.enableRecurringRepaymentWithHttpInfo(recurringId, null);

    assertEquals(200, response.getStatusCode());
    Object enabled = response.getData().getData();
    assertEquals(recurringId, ApiSupport.jsonApiId(enabled));
    assertTrue(
        Repayments.RECURRING_REPAYMENT_TYPES.contains(ApiSupport.jsonApiType(enabled)),
        "unexpected recurring repayment type " + ApiSupport.jsonApiType(enabled));
    assertNotNull(enabled);
  }
}
