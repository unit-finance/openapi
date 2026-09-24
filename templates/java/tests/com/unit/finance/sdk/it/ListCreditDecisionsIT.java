package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.unit.finance.sdk.api.CreditDecisionsApi;
import com.unit.finance.sdk.model.ListCreditDecisions200Response;
import com.unit.finance.sdk.model.ListCreditDecisions200ResponseDataInner;
import org.junit.jupiter.api.Test;

/** Mirrors {@code credit-decisions/list-credit-decisions.test.ts}. */
class ListCreditDecisionsIT {

  @Test
  void returnsAJsonApiListWithPageLimit20() throws Exception {
    ApiSupport.assumeToken();
    CreditDecisionsApi api = ApiSupport.buildCreditDecisionsApi();

    ListCreditDecisions200Response response = Credit.listDecisionsOrSkip(api);
    if (response == null) {
      return;
    }

    assertNotNull(response.getData());
    assertTrue(response.getData().size() <= 20);
    for (ListCreditDecisions200ResponseDataInner item : response.getData()) {
      assertNotNull(ApiSupport.jsonApiId(item));
      assertNotNull(ApiSupport.jsonApiType(item));
    }
  }
}
