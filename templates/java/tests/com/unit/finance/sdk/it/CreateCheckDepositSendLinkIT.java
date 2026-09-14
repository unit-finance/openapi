package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assumptions.assumeTrue;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CheckDepositsApi;
import com.unit.finance.sdk.model.CreateCheckDepositSendLink201Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code check-deposits/create-send-link.test.ts}. */
class CreateCheckDepositSendLinkIT {

  @Test
  void createsACheckDepositSendLink() throws Exception {
    ApiSupport.assumeToken();
    CheckDepositsApi api = ApiSupport.buildCheckDepositsApi();

    // Requires a white-label theme and authorized user that a plain sandbox org
    // may not have; the helper returns null (skip) when the org rejects the
    // request for a missing relationship.
    ApiResponse<CreateCheckDepositSendLink201Response> response =
        CheckDeposits.createSendLinkOrSkip(api);
    assumeTrue(response != null, "check deposit send link is unavailable on this sandbox org");

    assertEquals(201, response.getStatusCode());
    assertNotNull(response.getData().getData());
    assertNotNull(response.getData().getData().getType());
  }
}
