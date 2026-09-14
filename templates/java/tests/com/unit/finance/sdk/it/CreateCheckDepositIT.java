package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CheckDepositsApi;
import com.unit.finance.sdk.model.CheckDeposit;
import com.unit.finance.sdk.model.CreateCheckDeposit201Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code check-deposits/create.test.ts}. */
class CreateCheckDepositIT {

  @Test
  void createsACheckDepositOnTheSharedAccount() throws Exception {
    ApiSupport.assumeToken();
    CheckDepositsApi api = ApiSupport.buildCheckDepositsApi();
    SharedAccount shared = SharedAccount.get();

    ApiResponse<CreateCheckDeposit201Response> response =
        api.createCheckDepositWithHttpInfo(Fixtures.createCheckDepositRequest(shared.accountId));

    assertEquals(201, response.getStatusCode());
    CheckDeposit checkDeposit = response.getData().getData();
    assertEquals("checkDeposit", ApiSupport.jsonApiType(checkDeposit));
    assertNotNull(checkDeposit.getId());
    assertNotNull(checkDeposit.getAttributes());
    assertNotNull(checkDeposit.getAttributes().getStatus());
  }
}
