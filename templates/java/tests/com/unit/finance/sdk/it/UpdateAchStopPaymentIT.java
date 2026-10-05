package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.model.UpdateAchStopPayment200Response;
import org.junit.jupiter.api.Test;

class UpdateAchStopPaymentIT {

  @Test
  void updatesTheExpirationAndTagsOfAnAchStopPayment() throws Exception {
    ApiSupport.assumeToken();
    String stopPaymentId = StopPayments.createAchStopPaymentId();

    ApiResponse<UpdateAchStopPayment200Response> response =
        ApiSupport.buildStopPaymentsApi()
            .updateAchStopPaymentWithHttpInfo(
                stopPaymentId, Fixtures.updateAchStopPaymentRequest());

    assertEquals(200, response.getStatusCode());
    Object stopPayment = response.getData().getData();
    assertEquals(stopPaymentId, ApiSupport.jsonApiId(stopPayment));
    assertEquals("achStopPayment", ApiSupport.jsonApiType(stopPayment));
    assertNotNull(stopPayment);
  }
}
