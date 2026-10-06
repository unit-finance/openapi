package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.model.ReturnExternalRepayment200Response;
import org.junit.jupiter.api.Test;

class ReturnExternalRepaymentIT {

  @Test
  void returnsAnExternalRepayment() throws Exception {
    ApiSupport.assumeToken();
    String repaymentId = Repayments.createExternalRepaymentOrSkip();
    if (repaymentId == null) {
      return;
    }

    ApiResponse<ReturnExternalRepayment200Response> response;
    try {
      response =
          ApiSupport.buildRepaymentsApi()
              .returnExternalRepaymentWithHttpInfo(
                  repaymentId, Fixtures.returnExternalRepaymentRequest(repaymentId));
    } catch (ApiException e) {
      // `return` is only valid once the repayment has settled to `Sent`. The
      // sandbox creates it `Pending` and there is no way to advance it, so a
      // rejected return is an unreachable state, not a bad request.
      if (Capabilities.isCapabilityError(e)) {
        System.out.println(
            "The external repayment is not in a returnable state on this sandbox org; "
                + "skipping. "
                + Capabilities.errorBody(e));
        return;
      }
      throw e;
    }

    assertEquals(200, response.getStatusCode());
    Object repayment = response.getData().getData();
    assertEquals(repaymentId, ApiSupport.jsonApiId(repayment));
    assertEquals("externalRepayment", ApiSupport.jsonApiType(repayment));
    assertNotNull(repayment);
  }
}
