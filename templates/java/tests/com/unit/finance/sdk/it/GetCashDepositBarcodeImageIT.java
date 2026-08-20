package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assumptions.assumeTrue;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.unit.finance.sdk.api.PaymentsApi;
import com.unit.finance.sdk.model.CashDepositBarcodeAttributes;
import com.unit.finance.sdk.model.GenerateCashDepositBarcode200Response;
import com.unit.finance.sdk.model.ListStoreLocations200Response;
import com.unit.finance.sdk.model.StoreLocation;
import java.io.File;
import org.junit.jupiter.api.Test;

class GetCashDepositBarcodeImageIT {

  @Test
  void returnsTheBarcodeImageFile() throws Exception {
    ApiSupport.assumeToken();
    PaymentsApi api = ApiSupport.buildPaymentsApi();
    SharedAccount shared = SharedAccount.get();

    ListStoreLocations200Response stores =
        api.listStoreLocations(null, "11375", null, "1", null);
    assumeTrue(stores.getData() != null && !stores.getData().isEmpty(), "no store locations in sandbox");
    StoreLocation store = stores.getData().get(0);
    String storeId = store.getAttributes().getStoreId();

    GenerateCashDepositBarcode200Response barcode =
        api.generateCashDepositBarcode(
            Fixtures.generateCashDepositBarcodeRequest(
                shared.customerId, shared.accountId, storeId));
    CashDepositBarcodeAttributes attributes = barcode.getData().getAttributes();
    String barcodeNumber = attributes.getBarcodeNumber();

    File image = api.getCashDepositBarcodeImage(barcodeNumber);

    assertNotNull(image);
    assertTrue(image.length() > 0);
  }
}
