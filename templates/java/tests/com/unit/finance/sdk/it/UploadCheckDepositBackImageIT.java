package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CheckDepositsApi;
import com.unit.finance.sdk.model.CheckDeposit;
import com.unit.finance.sdk.model.CreateCheckDeposit201Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code check-deposits/upload-back-image.test.ts}. */
class UploadCheckDepositBackImageIT {

  @Test
  void uploadsTheCheckDepositBackImage() throws Exception {
    ApiSupport.assumeToken();
    CheckDepositsApi api = ApiSupport.buildCheckDepositsApi();
    CheckDeposit created = CheckDeposits.create();
    // The back image can only be uploaded once the front image is present.
    api.uploadCheckDepositFrontImageWithHttpInfo(created.getId(), CheckDeposits.jpegImageFile());

    ApiResponse<CreateCheckDeposit201Response> response =
        api.uploadCheckDepositBackImageWithHttpInfo(created.getId(), CheckDeposits.jpegImageFile());

    assertEquals(200, response.getStatusCode());
    CheckDeposit checkDeposit = response.getData().getData();
    assertEquals("checkDeposit", ApiSupport.jsonApiType(checkDeposit));
    assertEquals(created.getId(), checkDeposit.getId());
    assertNotNull(checkDeposit.getAttributes());
  }
}
