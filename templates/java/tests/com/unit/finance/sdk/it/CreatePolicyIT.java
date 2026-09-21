package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assumptions.assumeTrue;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CardFraudOutreachApi;
import com.unit.finance.sdk.model.CreatePolicy201Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code card-fraud-outreach/create-policy.test.ts}. */
class CreatePolicyIT {

  @Test
  void createsACardFraudOutreachPolicy() throws Exception {
    ApiSupport.assumeToken();
    CardFraudOutreachApi api = ApiSupport.buildCardFraudOutreachApi();

    // Requires email/message outreach settings and a white-label theme that a
    // plain sandbox org may not have; the helper returns null (skip) when the
    // org rejects the request for a missing relationship.
    ApiResponse<CreatePolicy201Response> response = CardFraudOutreach.createPolicyOrSkip(api);
    assumeTrue(response != null, "card fraud outreach policy create is unavailable on this sandbox org");

    assertEquals(201, response.getStatusCode());
    assertEquals("cardFraudOutreachPolicy", ApiSupport.jsonApiType(response.getData().getData()));
    assertNotNull(ApiSupport.jsonApiId(response.getData().getData()));
  }
}
