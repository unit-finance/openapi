package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.ApplicationsApi;
import com.unit.finance.sdk.model.CheckRegisteredAgentAddress200Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code applications/check-registered-agent-address.test.ts}. */
class CheckRegisteredAgentAddressIT {

  @Test
  void returnsWhetherAnAddressIsARegisteredAgentAddress() throws Exception {
    ApiSupport.assumeToken();
    ApplicationsApi api = ApiSupport.buildApi();

    ApiResponse<CheckRegisteredAgentAddress200Response> response =
        api.checkRegisteredAgentAddressWithHttpInfo(
            Fixtures.checkRegisteredAgentAddressRequest());

    assertEquals(200, response.getStatusCode());
    assertEquals(
        "checkRegisteredAgentAddress", response.getData().getData().getType().getValue());
    assertNotNull(response.getData().getData().getAttributes().getIsRegisteredAgentAddress());
  }
}
