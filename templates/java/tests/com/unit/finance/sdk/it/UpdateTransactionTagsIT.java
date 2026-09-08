package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.TransactionsApi;
import com.unit.finance.sdk.model.UpdateTransaction200Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code transactions/update-tags.test.ts}. */
class UpdateTransactionTagsIT {

  @Test
  void updatesTransactionTags() throws Exception {
    ApiSupport.assumeToken();
    TransactionsApi api = ApiSupport.buildTransactionsApi();
    SharedTransaction shared = SharedTransaction.get();

    ApiResponse<UpdateTransaction200Response> response =
        api.updateTransactionTagsWithHttpInfo(
            shared.accountId, shared.transactionId, Fixtures.updateTransactionTagsRequest());

    assertEquals(200, response.getStatusCode());
    assertNotNull(ApiSupport.jsonApiType(response.getData().getData()));
    assertEquals(shared.transactionId, ApiSupport.jsonApiId(response.getData().getData()));
  }
}
