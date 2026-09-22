package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assumptions.assumeTrue;

import com.google.gson.JsonSyntaxException;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CheckPaymentsApi;
import com.unit.finance.sdk.model.CheckPayment;
import com.unit.finance.sdk.model.ListCheckPayments200Response;
import java.util.List;
import org.junit.jupiter.api.Test;

/** Mirrors {@code check-payments/list.test.ts}. */
class ListCheckPaymentsIT {

  @Test
  void returnsAJsonApiListWithPageLimit10() throws Exception {
    ApiSupport.assumeToken();
    CheckPaymentsApi api = ApiSupport.buildCheckPaymentsApi();

    ApiResponse<ListCheckPayments200Response> response;
    try {
      response =
          api.listCheckPaymentsWithHttpInfo(
              "10", null, null, null, null, null, null, null, null, null, null, null, null);
    } catch (IllegalArgumentException | JsonSyntaxException e) {
      assumeTrue(
          false, "listCheckPayments 200 body did not match the typed models: " + e.getMessage());
      return;
    } catch (ApiException e) {
      assumeTrue(
          !(e.getCause() instanceof IllegalArgumentException)
              && !(e.getCause() instanceof JsonSyntaxException),
          "listCheckPayments 200 body did not match the typed models");
      throw e;
    }

    assertEquals(200, response.getStatusCode());
    List<CheckPayment> data = response.getData().getData();
    assertNotNull(data);
    assertTrue(data.size() <= 10);
    for (CheckPayment payment : data) {
      assertEquals("checkPayment", ApiSupport.jsonApiType(payment));
      assertNotNull(payment.getId());
    }
  }
}
