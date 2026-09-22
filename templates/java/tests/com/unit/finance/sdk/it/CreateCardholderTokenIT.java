package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assumptions.assumeTrue;

import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CardHolderApiTokensApi;
import com.unit.finance.sdk.model.CreateCardholderToken201Response;
import com.unit.finance.sdk.model.CreateCardholderTokenVerification201Response;
import org.junit.jupiter.api.Test;

class CreateCardholderTokenIT {

  @Test
  void issuesACardholderTokenForTheSharedCard() throws Exception {
    ApiSupport.assumeToken();
    SharedCard shared = SharedCard.get();
    CardHolderApiTokensApi api = ApiSupport.buildCardHolderApiTokensApi();

    ApiResponse<CreateCardholderTokenVerification201Response> verification =
        CardholderTokens.createVerificationOrSkip(api, shared.cardId);
    assumeTrue(
        verification != null, "cardholder token verification is unavailable on this sandbox org");

    String verificationToken = "0";
    if (verification.getData().getData() != null
        && verification.getData().getData().getAttributes() != null
        && verification.getData().getData().getAttributes().getVerificationToken() != null) {
      verificationToken = verification.getData().getData().getAttributes().getVerificationToken();
    }

    ApiResponse<CreateCardholderToken201Response> response;
    try {
      response =
          api.createCardholderTokenWithHttpInfo(
              shared.cardId, Fixtures.createCardholderTokenRequest(verificationToken));
    } catch (ApiException e) {
      // The 6-digit code is sent to the card holder over SMS, so the suite cannot supply a real
      // one and the sandbox answers 404 `verification_failed`. The spec marks
      // `verificationToken` / `verificationCode` required, so the generated model cannot send
      // the scope-only body the API accepts either.
      assumeTrue(
          !CardholderTokens.SKIP_STATUSES.contains(e.getCode()),
          "cardholder token creation needs an out-of-band OTP code");
      throw e;
    }

    assertEquals(201, response.getStatusCode());
    assertNotNull(response.getData().getData());
    assertNotNull(response.getData().getData().getAttributes());
  }
}
