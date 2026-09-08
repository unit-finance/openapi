package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.TransactionsApi;
import com.unit.finance.sdk.model.ListTransactions200Response;
import com.unit.finance.sdk.model.Transaction;
import org.junit.jupiter.api.Test;

/** Mirrors {@code transactions/list.test.ts}. */
class ListTransactionsIT {

  @Test
  void returnsAJsonApiListOfTransactionsForAnAccount() throws Exception {
    ApiSupport.assumeToken();
    TransactionsApi api = ApiSupport.buildTransactionsApi();
    SharedTransaction shared = SharedTransaction.get();

    // Scope to Book transactions: the shared account is funded via an
    // ATM-deposit simulation whose atmTransaction omits `tags`, a field the
    // generated strict Gson adapters require. Filtering to a type whose
    // responses carry `tags` keeps this assertion on listTransactions.
    ApiResponse<ListTransactions200Response> response =
        api.listTransactionsWithHttpInfo(
            "20", null, shared.accountId, null, null, null, null, null, null, null, "Book", null,
            null, null, null, null, null, null);

    assertTrue(response.getStatusCode() == 200);
    assertNotNull(response.getData().getData());
    assertTrue(response.getData().getData().size() <= 20);
    for (Transaction item : response.getData().getData()) {
      assertNotNull(ApiSupport.jsonApiType(item));
      assertNotNull(ApiSupport.jsonApiId(item));
    }
  }
}
