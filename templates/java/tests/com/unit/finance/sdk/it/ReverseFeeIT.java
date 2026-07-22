package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.FeesApi;
import com.unit.finance.sdk.model.CreateFee201Response;
import com.unit.finance.sdk.model.FeeReversal;
import com.unit.finance.sdk.model.ReverseFee201Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code fees/reverse-fee.test.ts}. */
class ReverseFeeIT {

  @Test
  void reversesAFeeOnADepositAccount() throws Exception {
    ApiSupport.assumeToken();
    FeesApi api = ApiSupport.buildFeesApi();
    SharedAccount account = SharedAccount.get();

    ApiResponse<CreateFee201Response> fee =
        api.createFeeWithHttpInfo(Fixtures.createFeeRequest(account.id));
    assertEquals(201, fee.getStatusCode());

    ApiResponse<ReverseFee201Response> response =
        api.reverseFeeWithHttpInfo(
            Fixtures.reverseFeeRequest(account.id, fee.getData().getData().getId()));

    assertEquals(201, response.getStatusCode());
    FeeReversal reversal = response.getData().getData();
    assertEquals("feeReversal", reversal.getType().getValue());
    assertNotNull(reversal.getId());
    assertNotNull(reversal.getAttributes());
    assertNotNull(reversal.getAttributes().getDescription());
  }
}
