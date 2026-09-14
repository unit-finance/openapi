package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CheckDepositsApi;
import com.unit.finance.sdk.model.CheckDeposit;
import java.io.File;
import org.junit.jupiter.api.Test;

/** Mirrors {@code check-deposits/get-back-image.test.ts}. */
class GetCheckDepositBackImageIT {

  @Test
  void getsTheCheckDepositBackImage() throws Exception {
    ApiSupport.assumeToken();
    CheckDeposit shared = CheckDeposits.getOrCreateShared();
    CheckDepositsApi api = ApiSupport.buildCheckDepositsApi();

    ApiResponse<File> response = api.getCheckDepositBackImageWithHttpInfo(shared.getId());

    assertEquals(200, response.getStatusCode());
    assertNotNull(response.getData());
  }
}
