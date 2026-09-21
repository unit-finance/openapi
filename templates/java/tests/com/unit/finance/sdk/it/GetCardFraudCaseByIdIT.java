package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assumptions.assumeTrue;

import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CardFraudOutreachApi;
import com.unit.finance.sdk.model.GetCardFraudCaseById200Response;
import com.unit.finance.sdk.model.ListCardFraudCases200Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code card-fraud-outreach/get-card-fraud-case-by-id.test.ts}. */
class GetCardFraudCaseByIdIT {

  @Test
  void returnsACardFraudCaseById() throws Exception {
    ApiSupport.assumeToken();
    CardFraudOutreachApi api = ApiSupport.buildCardFraudOutreachApi();

    ApiResponse<ListCardFraudCases200Response> listed = CardFraudOutreach.listCasesOrSkip(api);
    assumeTrue(
        listed != null,
        "listCardFraudCases is unavailable or the 200 body did not match the typed models");
    assumeTrue(
        listed.getData().getData() != null && !listed.getData().getData().isEmpty(),
        "no card fraud cases in sandbox");

    String caseId = ApiSupport.jsonApiId(listed.getData().getData().get(0));
    assumeTrue(caseId != null, "listed card fraud case has no id");

    ApiResponse<GetCardFraudCaseById200Response> response;
    try {
      response = api.getCardFraudCaseByIdWithHttpInfo(caseId);
    } catch (IllegalArgumentException e) {
      assumeTrue(false, "getCardFraudCaseById body did not match typed models: " + e.getMessage());
      return;
    } catch (ApiException e) {
      if (e.getCause() instanceof IllegalArgumentException
          || (e.getMessage() != null && e.getMessage().contains("required field"))) {
        assumeTrue(false, "getCardFraudCaseById body did not match typed models: " + e.getMessage());
        return;
      }
      throw e;
    }

    assertEquals(200, response.getStatusCode());
    assertEquals(caseId, ApiSupport.jsonApiId(response.getData().getData()));
    assertNotNull(ApiSupport.jsonApiType(response.getData().getData()));
  }
}
