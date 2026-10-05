package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.unit.finance.sdk.model.ListRecurringRepayments200Response;
import org.junit.jupiter.api.Test;

class ListRecurringRepaymentsIT {

  @Test
  void returnsAJsonApiListWithPageLimit20() throws Exception {
    ApiSupport.assumeToken();

    ListRecurringRepayments200Response response =
        ApiSupport.buildRecurringRepaymentsApi()
            .listRecurringRepayments("20", null, null, null, null, null, null, null);

    assertNotNull(response.getData());
    assertTrue(response.getData().size() <= 20);
    for (Object recurring : response.getData()) {
      assertNotNull(ApiSupport.jsonApiId(recurring));
      assertTrue(
          Repayments.RECURRING_REPAYMENT_TYPES.contains(ApiSupport.jsonApiType(recurring)),
          "unexpected recurring repayment type " + ApiSupport.jsonApiType(recurring));
    }
  }
}
