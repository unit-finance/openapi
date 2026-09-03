package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.FeesApi;
import com.unit.finance.sdk.model.CreateFee201Response;
import com.unit.finance.sdk.model.Fee;
import com.unit.finance.sdk.model.ReverseFee201Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code fees/reverse-fee.test.ts}. */
class ReverseFeeIT {

  @Test
  void reversesAFee() throws Exception {
    ApiSupport.assumeToken();
    SharedAccount ctx = SharedAccount.get();
    FeesApi api = ApiSupport.buildFeesApi();
    ApiResponse<CreateFee201Response> created =
        api.createFeeWithHttpInfo(Fixtures.createFeeRequest(ctx.accountId));
    assertEquals(201, created.getStatusCode());
    Fee fee = created.getData().getData();
    String accountId =
        ApiSupport.relationshipId(fee.getRelationships().getAccount()) != null
            ? ApiSupport.relationshipId(fee.getRelationships().getAccount())
            : ctx.accountId;
    String transactionId = ApiSupport.feeTransactionId(fee);
    assertNotNull(transactionId);

    ApiResponse<ReverseFee201Response> response =
        api.reverseFeeWithHttpInfo(Fixtures.reverseFeeRequest(accountId, transactionId));

    assertEquals(201, response.getStatusCode());
    assertEquals("feeReversal", response.getData().getData().getType().getValue());
    assertNotNull(response.getData().getData().getId());
  }
}
