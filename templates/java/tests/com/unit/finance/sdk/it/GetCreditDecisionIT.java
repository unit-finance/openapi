package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CreditDecisionsApi;
import com.unit.finance.sdk.model.CreateCreditDecision201Response;
import com.unit.finance.sdk.model.ListCreditDecisions200Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code credit-decisions/get-credit-decision.test.ts}. */
class GetCreditDecisionIT {

  @Test
  void fetchesACreditDecisionById() throws Exception {
    ApiSupport.assumeToken();
    CreditDecisionsApi api = ApiSupport.buildCreditDecisionsApi();

    // Decisions can only be created against a credit application, which needs a
    // lending program this org may not have; with an empty list there is
    // nothing to GET.
    ListCreditDecisions200Response listed = Credit.listDecisionsOrSkip(api);
    if (listed == null || listed.getData() == null || listed.getData().isEmpty()) {
      return;
    }
    String decisionId = ApiSupport.jsonApiId(listed.getData().get(0));
    if (decisionId == null) {
      return;
    }

    ApiResponse<CreateCreditDecision201Response> response =
        api.getCreditDecisionWithHttpInfo(decisionId);

    assertEquals(200, response.getStatusCode());
    assertEquals(decisionId, ApiSupport.jsonApiId(response.getData().getData()));
    assertNotNull(ApiSupport.jsonApiType(response.getData().getData()));
  }
}
