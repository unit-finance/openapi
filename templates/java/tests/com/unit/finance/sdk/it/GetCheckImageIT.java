package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assumptions.assumeTrue;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CheckPaymentsApi;
import com.unit.finance.sdk.model.CheckPayment;
import java.io.File;
import org.junit.jupiter.api.Test;

/** Mirrors {@code check-payments/get-image.test.ts}. */
class GetCheckImageIT {

  @Test
  void getsAPrintedFrontImageWhenTheCheckHasBeenProduced() throws Exception {
    ApiSupport.assumeToken();
    CheckPayment shared = CheckPayments.getOrCreateShared();
    assumeTrue(shared != null, "check payments are unavailable on this sandbox org");
    CheckPaymentsApi api = ApiSupport.buildCheckPaymentsApi();

    ApiResponse<File> response = CheckPayments.getCheckImageOrSkip(api, shared.getId());
    assumeTrue(response != null, "check payment image is not available yet");

    assertEquals(200, response.getStatusCode());
    assertNotNull(response.getData());
  }
}
