package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.api.DacaApi;
import com.unit.finance.sdk.model.EnterControlAgreement200Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code daca/deactivate-control-agreement.test.ts}. */
class DeactivateControlAgreementIT {

  @Test
  void deactivatesAControlAgreementOnAnActivatedAccount() throws Exception {
    ApiSupport.assumeToken();
    DacaApi api = ApiSupport.buildDacaApi();
    String accountId = Daca.createAccountInState(Daca.State.ACTIVATED);

    EnterControlAgreement200Response response =
        api.deactivateControlAgreement(accountId, Fixtures.updateDacaPoliciesRequest(accountId));

    assertEquals(accountId, response.getData().getId());
    assertEquals("depositAccount", response.getData().getType().getValue());
    assertNotNull(response.getData().getAttributes());
  }
}
