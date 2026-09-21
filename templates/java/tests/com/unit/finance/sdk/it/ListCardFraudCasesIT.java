package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assumptions.assumeTrue;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CardFraudOutreachApi;
import com.unit.finance.sdk.model.ListCardFraudCases200Response;
import com.unit.finance.sdk.model.ListCardFraudCases200ResponseDataInner;
import org.junit.jupiter.api.Test;

/** Mirrors {@code card-fraud-outreach/list-card-fraud-cases.test.ts}. */
class ListCardFraudCasesIT {

  @Test
  void returnsAJsonApiListWithPageLimit20() throws Exception {
    ApiSupport.assumeToken();
    CardFraudOutreachApi api = ApiSupport.buildCardFraudOutreachApi();

    ApiResponse<ListCardFraudCases200Response> response = CardFraudOutreach.listCasesOrSkip(api);
    assumeTrue(
        response != null,
        "listCardFraudCases is unavailable or the 200 body did not match the typed models");

    assertNotNull(response.getData().getData());
    assertTrue(response.getData().getData().size() <= 20);
    for (ListCardFraudCases200ResponseDataInner item : response.getData().getData()) {
      assertNotNull(ApiSupport.jsonApiId(item));
      assertNotNull(ApiSupport.jsonApiType(item));
    }
  }
}
