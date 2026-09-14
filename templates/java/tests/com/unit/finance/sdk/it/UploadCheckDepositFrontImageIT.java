package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CheckDepositsApi;
import com.unit.finance.sdk.model.CheckDeposit;
import com.unit.finance.sdk.model.CreateCheckDeposit201Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code check-deposits/upload-front-image.test.ts}. */
class UploadCheckDepositFrontImageIT {

  @Test
  void uploadsTheCheckDepositFrontImage() throws Exception {
    ApiSupport.assumeToken();
    CheckDepositsApi api = ApiSupport.buildCheckDepositsApi();
    CheckDeposit created = CheckDeposits.create();

    ApiResponse<CreateCheckDeposit201Response> response =
        api.uploadCheckDepositFrontImageWithHttpInfo(created.getId(), CheckDeposits.jpegImageFile());

    assertEquals(200, response.getStatusCode());
    CheckDeposit checkDeposit = response.getData().getData();
    assertEquals("checkDeposit", ApiSupport.jsonApiType(checkDeposit));
    assertEquals(created.getId(), checkDeposit.getId());
    assertNotNull(checkDeposit.getAttributes());
  }
}
