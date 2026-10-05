package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.unit.finance.sdk.model.ListRepayments200Response;
import org.junit.jupiter.api.Test;

class ListRepaymentsIT {

  @Test
  void returnsAJsonApiListWithPageLimit20() throws Exception {
    ApiSupport.assumeToken();

    ListRepayments200Response response =
        ApiSupport.buildRepaymentsApi()
            .listRepayments("20", null, null, null, null, null, null, null, null, null);

    assertNotNull(response.getData());
    assertTrue(response.getData().size() <= 20);
    for (Object repayment : response.getData()) {
      assertNotNull(ApiSupport.jsonApiId(repayment));
      assertTrue(
          Repayments.REPAYMENT_TYPES.contains(ApiSupport.jsonApiType(repayment)),
          "unexpected repayment type " + ApiSupport.jsonApiType(repayment));
    }
  }
}
