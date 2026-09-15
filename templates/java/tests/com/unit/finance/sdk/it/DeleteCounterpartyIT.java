package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertTrue;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CounterpartiesApi;
import com.unit.finance.sdk.model.ACHCounterparty;
import org.junit.jupiter.api.Test;

class DeleteCounterpartyIT {

  @Test
  void deletesACounterparty() throws Exception {
    ApiSupport.assumeToken();
    CounterpartiesApi api = ApiSupport.buildCounterpartiesApi();
    ACHCounterparty counterparty = Counterparties.createDedicated();

    ApiResponse<Void> response = api.deleteCounterpartyWithHttpInfo(counterparty.getId(), null);

    // The spec documents 204 for DELETE /counterparties/{id}; the sandbox
    // answers 200 with an empty body.
    int status = response.getStatusCode();
    assertTrue(status == 200 || status == 204, "unexpected delete status " + status);
  }
}
