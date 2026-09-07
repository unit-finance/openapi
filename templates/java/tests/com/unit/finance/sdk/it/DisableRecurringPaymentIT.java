package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.api.PaymentsApi;
import com.unit.finance.sdk.model.CreateRecurringPayment201Response;
import org.junit.jupiter.api.Test;

class DisableRecurringPaymentIT {

  @Test
  void disablesARecurringPayment() throws Exception {
    ApiSupport.assumeToken();
    PaymentsApi api = ApiSupport.buildPaymentsApi();
    SharedAccount shared = SharedAccount.get();

    CreateRecurringPayment201Response created =
        api.createRecurringPayment(
            Fixtures.createRecurringBookPaymentRequest(
                shared.accountId, shared.counterpartyAccountId));
    String id = ApiSupport.jsonApiId(created.getData());

    CreateRecurringPayment201Response response = api.disableRecurringPayment(id, null);

    assertEquals(id, ApiSupport.jsonApiId(response.getData()));
    assertNotNull(response.getData().getActualInstance());
  }
}
