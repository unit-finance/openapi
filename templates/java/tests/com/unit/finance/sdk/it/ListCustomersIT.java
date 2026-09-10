package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.unit.finance.sdk.api.CustomersApi;
import com.unit.finance.sdk.model.ListCustomers200Response;
import com.unit.finance.sdk.model.ListCustomers200ResponseDataInner;
import java.util.Arrays;
import org.junit.jupiter.api.Test;

/** Mirrors {@code customers/list.test.ts}. */
class ListCustomersIT {

  @Test
  void returnsAJsonApiListWithPageLimit20() throws Exception {
    ApiSupport.assumeToken();
    CustomersApi api = ApiSupport.buildCustomersApi();

    ListCustomers200Response response =
        api.listCustomers("20", null, null, null, null, null, null);

    assertNotNull(response.getData());
    assertTrue(response.getData().size() <= 20);
    for (ListCustomers200ResponseDataInner item : response.getData()) {
      String type = ApiSupport.jsonApiType(item);
      assertTrue(
          Arrays.asList("businessCustomer", "individualCustomer").contains(type),
          "unexpected resource type: " + type);
      assertNotNull(ApiSupport.jsonApiId(item));
    }
  }
}
