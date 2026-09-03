package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.PaymentsApi;
import com.unit.finance.sdk.model.GenerateCashDepositBarcode200Response;
import com.unit.finance.sdk.model.ListStoreLocations200Response;
import java.io.File;
import org.junit.jupiter.api.Test;

/** Mirrors {@code payments/get-cash-deposit-barcode-image.test.ts}. */
class GetCashDepositBarcodeImageIT {

  @Test
  void returnsABarcodeImage() throws Exception {
    ApiSupport.assumeToken();
    SharedAccount ctx = SharedAccount.get();
    PaymentsApi api = ApiSupport.buildPaymentsApi();
    ListStoreLocations200Response stores = api.listStoreLocations(null, "11375", null, null, null);
    if (stores.getData() == null || stores.getData().isEmpty()) {
      return;
    }
    String storeId = stores.getData().get(0).getId();
    ApiResponse<GenerateCashDepositBarcode200Response> barcode =
        api.generateCashDepositBarcodeWithHttpInfo(
            Fixtures.cashDepositBarcodeRequest(ctx.customerId, ctx.accountId, storeId));
    assertEquals(201, barcode.getStatusCode());
    String barcodeNumber = barcode.getData().getData().getAttributes().getBarcodeNumber();

    ApiResponse<File> response = api.getCashDepositBarcodeImageWithHttpInfo(barcodeNumber);

    assertEquals(200, response.getStatusCode());
  }
}
