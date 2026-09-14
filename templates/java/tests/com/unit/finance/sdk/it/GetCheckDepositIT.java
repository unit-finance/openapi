package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CheckDepositsApi;
import com.unit.finance.sdk.model.CheckDeposit;
import com.unit.finance.sdk.model.GetCheckDeposit200Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code check-deposits/get.test.ts}. */
class GetCheckDepositIT {

  @Test
  void getsACheckDepositById() throws Exception {
    ApiSupport.assumeToken();
    CheckDeposit shared = CheckDeposits.getOrCreateShared();
    CheckDepositsApi api = ApiSupport.buildCheckDepositsApi();

    ApiResponse<GetCheckDeposit200Response> response =
        api.getCheckDepositWithHttpInfo(shared.getId(), null);

    assertEquals(200, response.getStatusCode());
    CheckDeposit checkDeposit = response.getData().getData();
    assertEquals("checkDeposit", ApiSupport.jsonApiType(checkDeposit));
    assertEquals(shared.getId(), checkDeposit.getId());
    assertNotNull(checkDeposit.getAttributes());
    assertNotNull(checkDeposit.getAttributes().getStatus());
  }
}
