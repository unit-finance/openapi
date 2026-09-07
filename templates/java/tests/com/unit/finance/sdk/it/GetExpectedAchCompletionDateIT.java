package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.api.PaymentsApi;
import com.unit.finance.sdk.model.GetExpectedAchCompletionDate200Response;
import org.junit.jupiter.api.Test;

class GetExpectedAchCompletionDateIT {

  @Test
  void returnsExpectedAchCompletionDate() throws Exception {
    ApiSupport.assumeToken();
    PaymentsApi api = ApiSupport.buildPaymentsApi();
    SharedAccount shared = SharedAccount.get();

    GetExpectedAchCompletionDate200Response response =
        api.getExpectedAchCompletionDate(
            Fixtures.getExpectedAchCompletionDateRequest(shared.accountId));

    assertNotNull(response.getData());
  }
}
