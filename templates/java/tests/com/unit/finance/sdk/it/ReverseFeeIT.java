package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.FeesApi;
import com.unit.finance.sdk.model.CreateFee201Response;
import com.unit.finance.sdk.model.ReverseFee201Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code fees/reverse.test.ts}. */
class ReverseFeeIT {

  @Test
  void reversesAPreviouslyCreatedFee() throws Exception {
    ApiSupport.assumeToken();
    FeesApi api = ApiSupport.buildFeesApi();
    String accountId = ApiSupport.getSandboxDepositAccountId();

    ApiResponse<CreateFee201Response> created =
        api.createFeeWithHttpInfo(Fixtures.createFeeRequest(accountId));
    assertEquals(201, created.getStatusCode());
    String transactionId = created.getData().getData().getId();

    ApiResponse<ReverseFee201Response> response =
        api.reverseFeeWithHttpInfo(Fixtures.reverseFeeRequest(accountId, transactionId));

    assertEquals(201, response.getStatusCode());
    assertEquals("feeReversal", response.getData().getData().getType().getValue());
    assertNotNull(response.getData().getData().getId());
    assertNotNull(response.getData().getData().getAttributes());
    assertNotNull(response.getData().getData().getAttributes().getDescription());
  }
}
