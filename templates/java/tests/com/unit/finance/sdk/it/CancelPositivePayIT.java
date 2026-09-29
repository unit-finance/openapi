package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.PositivePayApi;
import com.unit.finance.sdk.model.CancelPositivePay200Response;
import java.util.LinkedHashMap;
import org.junit.jupiter.api.Test;

/** Mirrors {@code positive-pay/cancel-positive-pay.test.ts}. */
class CancelPositivePayIT {

  @Test
  void cancelsAPositivePayRuleItCreated() throws Exception {
    ApiSupport.assumeToken();
    PositivePayApi api = ApiSupport.buildPositivePayApi();
    String positivePayId = PositivePay.createCheckPaymentRuleId();

    // The spec declares the cancel body as an optional untyped `object`; the
    // sandbox accepts an empty one.
    ApiResponse<CancelPositivePay200Response> response =
        api.cancelPositivePayWithHttpInfo(positivePayId, new LinkedHashMap<String, Object>());

    // The spec documents 200 for this operation, but the sandbox answers 201.
    // Tracked in SLICES.md as a spec defect owned by `unit-openapi`.
    assertEquals(201, response.getStatusCode());
    Object data = response.getData().getData();
    assertEquals(positivePayId, ApiSupport.jsonApiId(data));
    assertEquals("checkPaymentPositivePay", ApiSupport.jsonApiType(data));
    assertNotNull(data);
  }
}
