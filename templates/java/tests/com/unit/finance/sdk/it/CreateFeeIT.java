package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.FeesApi;
import com.unit.finance.sdk.model.CreateFee201Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code fees/create.test.ts}. */
class CreateFeeIT {

  @Test
  void createsAFeeOnADepositAccount() throws Exception {
    ApiSupport.assumeToken();
    FeesApi api = ApiSupport.buildFeesApi();
    String accountId = ApiSupport.getSandboxDepositAccountId();

    ApiResponse<CreateFee201Response> response =
        api.createFeeWithHttpInfo(Fixtures.createFeeRequest(accountId));

    assertEquals(201, response.getStatusCode());
    assertEquals("fee", response.getData().getData().getType().getValue());
    assertNotNull(response.getData().getData().getId());
    assertNotNull(response.getData().getData().getAttributes());
    assertNotNull(response.getData().getData().getAttributes().getAmount());
    assertNotNull(response.getData().getData().getAttributes().getDescription());
  }
}
