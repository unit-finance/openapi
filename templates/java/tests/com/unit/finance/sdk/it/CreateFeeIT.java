package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.FeesApi;
import com.unit.finance.sdk.model.CreateFee201Response;
import org.junit.jupiter.api.Test;

class CreateFeeIT {

  @Test
  void returnsFeeResource() throws Exception {
    ApiSupport.assumeToken();
    FeesApi api = ApiSupport.buildFeesApi();
    SharedAccount shared = SharedAccount.get();
    Funding.fundAccount(shared.accountId, 1000);

    ApiResponse<CreateFee201Response> response =
        api.createFeeWithHttpInfo(Fixtures.createFeeRequest(shared.accountId));

    assertEquals(201, response.getStatusCode());
    assertEquals("fee", ApiSupport.jsonApiType(response.getData().getData()));
    assertNotNull(ApiSupport.jsonApiId(response.getData().getData()));
  }
}
