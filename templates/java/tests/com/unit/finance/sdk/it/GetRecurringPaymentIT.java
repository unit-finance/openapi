package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.api.PaymentsApi;
import com.unit.finance.sdk.model.CreateRecurringPayment201Response;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

class GetRecurringPaymentIT {

  // TODO(payments-slice): re-enable once the recurring-payment response schemas
  // are fixed. The generated `oneOf` marks RecurringCreditBookPayment.transactionSummaryOverride
  // (and RecurringCreditACHPayment.tags) as required, but the sandbox omits them,
  // so gson can't deserialize an otherwise-valid response. Fix in the OpenAPI payments slice.
  @Disabled("payments-slice: recurring response fields wrongly required; won't deserialize")
  @Test
  void returnsTheRecurringPaymentById() throws Exception {
    ApiSupport.assumeToken();
    PaymentsApi api = ApiSupport.buildPaymentsApi();
    SharedAccount shared = SharedAccount.get();

    CreateRecurringPayment201Response created =
        api.createRecurringPayment(
            Fixtures.createRecurringBookPaymentRequest(
                shared.accountId, shared.counterpartyAccountId));
    String id = ApiSupport.jsonApiId(created.getData());

    CreateRecurringPayment201Response response = api.getRecurringPayment(id);

    assertEquals(id, ApiSupport.jsonApiId(response.getData()));
    assertNotNull(response.getData().getActualInstance());
  }
}
