package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.api.PaymentsApi;
import com.unit.finance.sdk.model.CreateRecurringPayment201Response;
import org.junit.jupiter.api.Test;

class EnableRecurringPaymentIT {

  @Test
  void enablesADisabledRecurringPayment() throws Exception {
    ApiSupport.assumeToken();
    PaymentsApi api = ApiSupport.buildPaymentsApi();
    SharedAccount shared = SharedAccount.get();

    CreateRecurringPayment201Response created =
        api.createRecurringPayment(
            Fixtures.createRecurringBookPaymentRequest(
                shared.accountId, shared.counterpartyAccountId));
    String id = ApiSupport.jsonApiId(created.getData());
    api.disableRecurringPayment(id);

    CreateRecurringPayment201Response response = api.enableRecurringPayment(id);

    assertEquals(id, ApiSupport.jsonApiId(response.getData()));
    assertNotNull(response.getData().getActualInstance());
  }
}
