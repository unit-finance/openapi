package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.PaymentsApi;
import com.unit.finance.sdk.model.CreateBatchReleases201Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code payments/create-batch-releases.test.ts}. */
class CreateBatchReleasesIT {

  @Test
  void createsBatchReleasesWhenABatchAccountIsConfigured() throws Exception {
    ApiSupport.assumeToken();
    SharedAccount ctx = SharedAccount.get();
    PaymentsApi api = ApiSupport.buildPaymentsApi();

    ApiResponse<CreateBatchReleases201Response> response =
        api.createBatchReleasesWithHttpInfo(Fixtures.batchReleasesRequest(ctx.accountId));

    assertEquals(201, response.getStatusCode());
    assertNotNull(response.getData().getData());
  }
}
