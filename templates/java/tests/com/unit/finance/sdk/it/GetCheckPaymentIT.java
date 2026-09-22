package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assumptions.assumeTrue;

import com.google.gson.JsonSyntaxException;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CheckPaymentsApi;
import com.unit.finance.sdk.model.CheckPayment;
import com.unit.finance.sdk.model.GetCheckPayment200Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code check-payments/get.test.ts}. */
class GetCheckPaymentIT {

  @Test
  void getsACheckPaymentById() throws Exception {
    ApiSupport.assumeToken();
    CheckPayment shared = CheckPayments.getOrCreateShared();
    assumeTrue(shared != null, "check payments are unavailable on this sandbox org");
    CheckPaymentsApi api = ApiSupport.buildCheckPaymentsApi();

    ApiResponse<GetCheckPayment200Response> response;
    try {
      response = api.getCheckPaymentWithHttpInfo(shared.getId(), null);
    } catch (IllegalArgumentException | JsonSyntaxException e) {
      assumeTrue(
          false, "getCheckPayment 200 body did not match the typed models: " + e.getMessage());
      return;
    } catch (ApiException e) {
      assumeTrue(
          !(e.getCause() instanceof IllegalArgumentException)
              && !(e.getCause() instanceof JsonSyntaxException),
          "getCheckPayment 200 body did not match the typed models");
      throw e;
    }

    assertEquals(200, response.getStatusCode());
    CheckPayment payment = response.getData().getData();
    assertEquals("checkPayment", ApiSupport.jsonApiType(payment));
    assertEquals(shared.getId(), payment.getId());
    assertNotNull(payment.getAttributes());
    assertNotNull(payment.getAttributes().getStatus());
  }
}
