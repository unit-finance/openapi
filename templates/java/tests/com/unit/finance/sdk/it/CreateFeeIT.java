package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.FeesApi;
import com.unit.finance.sdk.model.CreateFee201Response;
import com.unit.finance.sdk.model.Fee;
import org.junit.jupiter.api.Test;

/** Mirrors {@code fees/create-fee.test.ts}. */
class CreateFeeIT {

  @Test
  void createsAFeeForADepositAccount() throws Exception {
    ApiSupport.assumeToken();
    SharedAccount ctx = SharedAccount.get();
    FeesApi api = ApiSupport.buildFeesApi();

    ApiResponse<CreateFee201Response> response =
        api.createFeeWithHttpInfo(Fixtures.createFeeRequest(ctx.accountId));

    assertEquals(201, response.getStatusCode());
    Fee fee = response.getData().getData();
    assertEquals("fee", fee.getType().getValue());
    assertNotNull(fee.getId());
    assertNotNull(fee.getAttributes());
    assertNotNull(fee.getAttributes().getAmount());
  }
}
