package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.FeesApi;
import com.unit.finance.sdk.model.CreateFee201Response;
import com.unit.finance.sdk.model.ReverseFee201Response;
import org.junit.jupiter.api.Test;

class ReverseFeeIT {

  @Test
  void returnsFeeReversalResource() throws Exception {
    ApiSupport.assumeToken();
    FeesApi api = ApiSupport.buildFeesApi();
    SharedAccount shared = SharedAccount.get();

    CreateFee201Response created =
        api.createFee(Fixtures.createFeeRequest(shared.accountId));
    String transactionId = ApiSupport.jsonApiId(created.getData());

    ApiResponse<ReverseFee201Response> response =
        api.reverseFeeWithHttpInfo(
            Fixtures.reverseFeeRequest(shared.accountId, transactionId));

    assertEquals(201, response.getStatusCode());
    assertEquals("feeReversal", ApiSupport.jsonApiType(response.getData().getData()));
    assertNotNull(ApiSupport.jsonApiId(response.getData().getData()));
  }
}
