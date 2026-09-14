package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CheckDepositsApi;
import com.unit.finance.sdk.model.CheckDeposit;
import com.unit.finance.sdk.model.ListCheckDeposits200Response;
import java.util.List;
import org.junit.jupiter.api.Test;

/** Mirrors {@code check-deposits/list.test.ts}. */
class ListCheckDepositsIT {

  @Test
  void returnsAJsonApiListWithPageLimit10() throws Exception {
    ApiSupport.assumeToken();
    CheckDeposits.getOrCreateShared();
    CheckDepositsApi api = ApiSupport.buildCheckDepositsApi();

    ApiResponse<ListCheckDeposits200Response> response =
        api.listCheckDepositsWithHttpInfo(
            "10", null, null, null, null, null, null, null, null, null);

    assertEquals(200, response.getStatusCode());
    List<CheckDeposit> data = response.getData().getData();
    assertNotNull(data);
    assertTrue(data.size() <= 10);
    for (CheckDeposit checkDeposit : data) {
      assertEquals("checkDeposit", ApiSupport.jsonApiType(checkDeposit));
      assertNotNull(checkDeposit.getId());
    }
  }
}
