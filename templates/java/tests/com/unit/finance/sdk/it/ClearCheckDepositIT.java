package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assumptions.assumeTrue;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CheckDepositsApi;
import com.unit.finance.sdk.model.CheckDeposit;
import com.unit.finance.sdk.model.CreateCheckDeposit201Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code check-deposits/clear.test.ts}. */
class ClearCheckDepositIT {

  @Test
  void clearsACheckDepositThatIsInAClearableState() throws Exception {
    ApiSupport.assumeToken();
    CheckDeposit shared = CheckDeposits.getOrCreateShared();
    CheckDepositsApi api = ApiSupport.buildCheckDepositsApi();

    // `clear` is only valid while the deposit is in `Clearing` and requires the
    // Dynamic Clearing Period feature; when the precondition is not met the
    // helper returns null and the test is skipped.
    ApiResponse<CreateCheckDeposit201Response> response =
        CheckDeposits.clearOrSkip(api, shared.getId());
    assumeTrue(response != null, "check deposit is not in a clearable state on this sandbox org");

    assertEquals(200, response.getStatusCode());
    CheckDeposit checkDeposit = response.getData().getData();
    assertEquals("checkDeposit", ApiSupport.jsonApiType(checkDeposit));
    assertEquals(shared.getId(), checkDeposit.getId());
    assertNotNull(checkDeposit.getAttributes());
  }
}
