package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.model.GetRepayment200Response;
import org.junit.jupiter.api.Test;

class GetRepaymentIT {

  @Test
  void fetchesARepaymentById() throws Exception {
    ApiSupport.assumeToken();
    String repaymentId = Repayments.getRepaymentId();
    if (repaymentId == null) {
      return;
    }

    ApiResponse<GetRepayment200Response> response =
        ApiSupport.buildRepaymentsApi().getRepaymentWithHttpInfo(repaymentId);

    assertEquals(200, response.getStatusCode());
    Object repayment = response.getData().getData();
    assertEquals(repaymentId, ApiSupport.jsonApiId(repayment));
    assertTrue(
        Repayments.REPAYMENT_TYPES.contains(ApiSupport.jsonApiType(repayment)),
        "unexpected repayment type " + ApiSupport.jsonApiType(repayment));
    assertNotNull(repayment);
  }
}
