package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.api.PositivePayApi;
import com.unit.finance.sdk.model.GetPositivePayById200Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code positive-pay/get-positive-pay-by-id.test.ts}. */
class GetPositivePayByIdIT {

  @Test
  void readsASinglePositivePayRule() throws Exception {
    ApiSupport.assumeToken();
    PositivePayApi api = ApiSupport.buildPositivePayApi();
    String positivePayId = PositivePay.createCheckPaymentRuleId();

    GetPositivePayById200Response response = api.getPositivePayById(positivePayId);

    Object data = response.getData();
    assertEquals(positivePayId, ApiSupport.jsonApiId(data));
    assertEquals("checkPaymentPositivePay", ApiSupport.jsonApiType(data));
    assertNotNull(data);
  }
}
