package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assumptions.assumeTrue;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CardFraudOutreachApi;
import com.unit.finance.sdk.model.CardFraudOutreachPolicy;
import com.unit.finance.sdk.model.CreatePolicy201Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code card-fraud-outreach/update-policy.test.ts}. */
class UpdatePolicyIT {

  @Test
  void updatesACardFraudOutreachPolicy() throws Exception {
    ApiSupport.assumeToken();
    CardFraudOutreachApi api = ApiSupport.buildCardFraudOutreachApi();
    CardFraudOutreachPolicy policy = CardFraudOutreach.getOrCreatePolicy();
    assumeTrue(policy != null, "card fraud outreach policy create is unavailable on this sandbox org");

    ApiResponse<CreatePolicy201Response> response =
        api.updatePolicyWithHttpInfo(policy.getId(), Fixtures.updatePolicyRequest());

    assertEquals(200, response.getStatusCode());
    assertEquals(policy.getId(), ApiSupport.jsonApiId(response.getData().getData()));
    assertEquals("cardFraudOutreachPolicy", ApiSupport.jsonApiType(response.getData().getData()));
    assertNotNull(response.getData().getData().getAttributes());
  }
}
