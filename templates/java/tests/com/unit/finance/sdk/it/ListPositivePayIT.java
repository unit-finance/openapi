package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.unit.finance.sdk.api.PositivePayApi;
import com.unit.finance.sdk.model.ListPositivePay200Response;
import com.unit.finance.sdk.model.ListPositivePay200ResponseDataInner;
import org.junit.jupiter.api.Test;

/** Mirrors {@code positive-pay/list-positive-pay.test.ts}. */
class ListPositivePayIT {

  @Test
  void returnsAJsonApiListWithPageLimit20() throws Exception {
    ApiSupport.assumeToken();
    PositivePayApi api = ApiSupport.buildPositivePayApi();

    ListPositivePay200Response response =
        api.listPositivePay("20", null, null, null, null, null, null);

    assertNotNull(response.getData());
    assertTrue(response.getData().size() <= 20);
    for (ListPositivePay200ResponseDataInner rule : response.getData()) {
      assertNotNull(ApiSupport.jsonApiId(rule));
      assertTrue(PositivePay.TYPES.contains(ApiSupport.jsonApiType(rule)));
    }
  }
}
