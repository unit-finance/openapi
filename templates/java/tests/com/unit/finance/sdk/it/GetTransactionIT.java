package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.TransactionsApi;
import com.unit.finance.sdk.model.GetTransaction200Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code transactions/get.test.ts}. */
class GetTransactionIT {

  @Test
  void fetchesATransactionByAccountAndTransactionId() throws Exception {
    ApiSupport.assumeToken();
    TransactionsApi api = ApiSupport.buildTransactionsApi();
    SharedTransaction shared = SharedTransaction.get();

    ApiResponse<GetTransaction200Response> response =
        api.getTransactionWithHttpInfo(shared.accountId, shared.transactionId, null, null);

    assertEquals(200, response.getStatusCode());
    assertNotNull(ApiSupport.jsonApiType(response.getData().getData()));
    assertEquals(shared.transactionId, ApiSupport.jsonApiId(response.getData().getData()));
  }
}
