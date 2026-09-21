package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assumptions.assumeTrue;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CardHolderApiTokensApi;
import com.unit.finance.sdk.model.CreateCardholderTokenVerification201Response;
import org.junit.jupiter.api.Test;

class CreateCardholderTokenVerificationIT {

  @Test
  void startsAnOtpChallengeForTheSharedCard() throws Exception {
    ApiSupport.assumeToken();
    SharedCard shared = SharedCard.get();
    CardHolderApiTokensApi api = ApiSupport.buildCardHolderApiTokensApi();

    ApiResponse<CreateCardholderTokenVerification201Response> response =
        CardholderTokens.createVerificationOrSkip(api, shared.cardId);
    assumeTrue(response != null, "cardholder token verification is unavailable on this sandbox org");

    assertEquals(201, response.getStatusCode());
    assertNotNull(response.getData().getData());
  }
}
