package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CheckDepositsApi;
import com.unit.finance.sdk.model.CheckDeposit;
import com.unit.finance.sdk.model.CreateCheckDeposit201Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code check-deposits/update.test.ts}. */
class UpdateCheckDepositIT {

  @Test
  void updatesACheckDepositsTags() throws Exception {
    ApiSupport.assumeToken();
    CheckDeposit shared = CheckDeposits.getOrCreateShared();
    CheckDepositsApi api = ApiSupport.buildCheckDepositsApi();

    ApiResponse<CreateCheckDeposit201Response> response =
        api.updateCheckDepositWithHttpInfo(shared.getId(), Fixtures.updateCheckDepositRequest());

    assertEquals(200, response.getStatusCode());
    CheckDeposit checkDeposit = response.getData().getData();
    assertEquals("checkDeposit", ApiSupport.jsonApiType(checkDeposit));
    assertEquals(shared.getId(), checkDeposit.getId());
    assertNotNull(checkDeposit.getAttributes());
  }
}
