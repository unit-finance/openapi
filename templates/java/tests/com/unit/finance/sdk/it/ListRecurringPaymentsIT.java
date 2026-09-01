package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.unit.finance.sdk.api.PaymentsApi;
import com.unit.finance.sdk.model.ListRecurringPayments200Response;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

class ListRecurringPaymentsIT {

  // TODO(payments-slice): re-enable once the recurring-payment response schemas
  // are fixed. The generated `oneOf` marks RecurringCreditACHPayment.tags (and
  // RecurringCreditBookPayment.transactionSummaryOverride) as required, but the
  // sandbox omits them, so gson can't deserialize an otherwise-valid response.
  // Fix in the OpenAPI payments slice.
  @Disabled("payments-slice: recurring response fields wrongly required; won't deserialize")
  @Test
  void returnsAJsonApiListWithPageLimit20() throws Exception {
    ApiSupport.assumeToken();
    PaymentsApi api = ApiSupport.buildPaymentsApi();

    ListRecurringPayments200Response response =
        api.listRecurringPayments("20", null, null, null, null, null, null, null, null, null, null);

    assertNotNull(response.getData());
    assertTrue(response.getData().size() <= 20);
  }
}
