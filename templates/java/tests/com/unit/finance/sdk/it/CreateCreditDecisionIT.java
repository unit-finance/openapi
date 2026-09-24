package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CreditDecisionsApi;
import com.unit.finance.sdk.model.CreateCreditDecision201Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code credit-decisions/create-credit-decision.test.ts}. */
class CreateCreditDecisionIT {

  @Test
  void recordsAnApprovedCreditLimitDecision() throws Exception {
    ApiSupport.assumeToken();
    String applicationId = Credit.applicationId();
    if (applicationId == null) {
      return;
    }

    CreditDecisionsApi api = ApiSupport.buildCreditDecisionsApi();
    ApiResponse<CreateCreditDecision201Response> response =
        Credit.createDecisionOrSkip(api, applicationId);
    if (response == null) {
      return;
    }

    assertEquals(201, response.getStatusCode());
    assertNotNull(ApiSupport.jsonApiId(response.getData().getData()));
    assertNotNull(ApiSupport.jsonApiType(response.getData().getData()));
  }
}
