package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.PaymentsApi;
import com.unit.finance.sdk.model.CreateBatchReleases201Response;
import org.junit.jupiter.api.Test;

class CreateBatchReleasesIT {

  @Test
  void returnsBatchReleaseResource() throws Exception {
    ApiSupport.assumeToken();
    PaymentsApi api = ApiSupport.buildPaymentsApi();

    ApiResponse<CreateBatchReleases201Response> response =
        api.createBatchReleasesWithHttpInfo(Fixtures.createBatchReleasesRequest());

    assertEquals(201, response.getStatusCode());
    assertNotNull(response.getData().getData());
    assertEquals(
        "batchRelease", ApiSupport.jsonApiType(response.getData().getData().get(0)));
    assertNotNull(ApiSupport.jsonApiId(response.getData().getData().get(0)));
  }
}
