package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.unit.finance.sdk.model.ListRewards200Response;
import org.junit.jupiter.api.Test;

class ListRewardsIT {

  @Test
  void returnsAJsonApiListWithPageLimit20() throws Exception {
    ApiSupport.assumeToken();

    ListRewards200Response response =
        ApiSupport.buildRewardsApi()
            .listRewards(
                "20", null, null, null, null, null, null, null, null, null, null, null, null);

    assertNotNull(response.getData());
    assertTrue(response.getData().size() <= 20);
    for (Object reward : response.getData()) {
      assertNotNull(ApiSupport.jsonApiId(reward));
      assertEquals("reward", ApiSupport.jsonApiType(reward));
    }
  }
}
