package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assumptions.assumeTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.PaymentsApi;
import com.unit.finance.sdk.model.GenerateCashDepositBarcode200Response;
import com.unit.finance.sdk.model.ListStoreLocations200Response;
import com.unit.finance.sdk.model.StoreLocation;
import org.junit.jupiter.api.Test;

class GenerateCashDepositBarcodeIT {

  @Test
  void returnsCashDepositBarcodeResource() throws Exception {
    ApiSupport.assumeToken();
    PaymentsApi api = ApiSupport.buildPaymentsApi();
    SharedAccount shared = SharedAccount.get();

    ListStoreLocations200Response stores =
        api.listStoreLocations(null, "11375", null, "1", null);
    assumeTrue(stores.getData() != null && !stores.getData().isEmpty(), "no store locations in sandbox");
    StoreLocation store = stores.getData().get(0);
    String storeId = store.getAttributes().getStoreId();

    ApiResponse<GenerateCashDepositBarcode200Response> response =
        api.generateCashDepositBarcodeWithHttpInfo(
            Fixtures.generateCashDepositBarcodeRequest(
                shared.customerId, shared.accountId, storeId));

    assertEquals(201, response.getStatusCode());
    assertNotNull(ApiSupport.jsonApiId(response.getData().getData()));
  }
}
