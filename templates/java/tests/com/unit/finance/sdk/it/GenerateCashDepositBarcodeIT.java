package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.PaymentsApi;
import com.unit.finance.sdk.model.GenerateCashDepositBarcode200Response;
import com.unit.finance.sdk.model.ListStoreLocations200Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code payments/generate-cash-deposit-barcode.test.ts}. */
class GenerateCashDepositBarcodeIT {

  @Test
  void generatesACashDepositBarcode() throws Exception {
    ApiSupport.assumeToken();
    SharedAccount ctx = SharedAccount.get();
    PaymentsApi api = ApiSupport.buildPaymentsApi();
    ListStoreLocations200Response stores = api.listStoreLocations(null, "11375", null, null, null);
    if (stores.getData() == null || stores.getData().isEmpty()) {
      return;
    }
    String storeId = stores.getData().get(0).getId();

    ApiResponse<GenerateCashDepositBarcode200Response> response =
        api.generateCashDepositBarcodeWithHttpInfo(
            Fixtures.cashDepositBarcodeRequest(ctx.customerId, ctx.accountId, storeId));

    assertEquals(201, response.getStatusCode());
    assertEquals("cashDepositBarcode", response.getData().getData().getType().getValue());
    assertNotNull(response.getData().getData().getAttributes().getBarcodeNumber());
  }
}
