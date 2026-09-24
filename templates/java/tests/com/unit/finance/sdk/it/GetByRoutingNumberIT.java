package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.api.InstitutionsApi;
import com.unit.finance.sdk.model.GetByRoutingNumber200Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code institutions/get-by-routing-number.test.ts}. */
class GetByRoutingNumberIT {

  @Test
  void readsTheInstitutionBehindTheSharedAccountsRoutingNumber() throws Exception {
    ApiSupport.assumeToken();
    InstitutionsApi api = ApiSupport.buildInstitutionsApi();
    String routingNumber = SharedAccount.get().routingNumber;

    GetByRoutingNumber200Response response = api.getByRoutingNumber(routingNumber);

    // `institution` is keyed by routing number, so the resource carries no
    // JSON:API `id` — the spec marks it optional and the sandbox omits it.
    assertEquals("institution", response.getData().getType().getValue());
    assertEquals(routingNumber, response.getData().getAttributes().getRoutingNumber());
    assertNotNull(response.getData().getAttributes().getName());
    assertNotNull(response.getData().getAttributes().getIsACHSupported());
    assertNotNull(response.getData().getAttributes().getIsWireSupported());
  }
}
