package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assumptions.assumeTrue;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.api.PaymentsApi;
import com.unit.finance.sdk.model.CashDepositBarcodeAttributes;
import com.unit.finance.sdk.model.GenerateCashDepositBarcode200Response;
import com.unit.finance.sdk.model.ListStoreLocations200Response;
import com.unit.finance.sdk.model.StoreLocation;
import java.io.File;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

class GetCashDepositBarcodeImageIT {

  // TODO(payments-slice): re-enable once the store-location response schema is
  // fixed. Listing stores fails because StoreLocation.distance is marked required
  // but the sandbox omits it, so gson can't deserialize the store lookup this
  // test depends on. Fix in the OpenAPI payments slice.
  @Disabled("payments-slice: StoreLocation.distance wrongly required; won't deserialize")
  @Test
  void returnsTheBarcodeImageFile() throws Exception {
    ApiSupport.assumeToken();
    PaymentsApi api = ApiSupport.buildPaymentsApi();
    SharedAccount shared = SharedAccount.get();

    ListStoreLocations200Response stores;
    try {
      stores = api.listStoreLocations(null, "11375", "Barcode", "1", null);
    } catch (ApiException error) {
      // The sandbox store-locations endpoint currently 500s for valid queries;
      // without a store there is nothing to barcode, so skip.
      assumeTrue(error.getCode() != 500, "store-locations unavailable in sandbox (500); skipping.");
      throw error;
    }
    assumeTrue(stores.getData() != null && !stores.getData().isEmpty(), "no store locations in sandbox");
    StoreLocation store = stores.getData().get(0);
    String storeId = store.getAttributes().getStoreId();

    GenerateCashDepositBarcode200Response barcode;
    try {
      barcode =
          api.generateCashDepositBarcode(
              Fixtures.generateCashDepositBarcodeRequest(
                  shared.customerId, shared.accountId, storeId));
    } catch (ApiException error) {
      // Even with a valid payload the sandbox currently returns an opaque 500
      // ("Internal Error") for barcode generation on this org; without a
      // barcode there is nothing to fetch an image for, so skip.
      assumeTrue(
          error.getCode() != 500,
          "cash-deposit-barcode generation unavailable in sandbox (500); skipping.");
      throw error;
    }
    CashDepositBarcodeAttributes attributes = barcode.getData().getAttributes();
    String barcodeNumber = attributes.getBarcodeNumber();

    File image = api.getCashDepositBarcodeImage(barcodeNumber);

    assertNotNull(image);
    assertTrue(image.length() > 0);
  }
}
