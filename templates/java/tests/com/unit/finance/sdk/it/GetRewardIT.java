package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.model.GetReward200Response;
import org.junit.jupiter.api.Test;

class GetRewardIT {

  @Test
  void fetchesARewardById() throws Exception {
    ApiSupport.assumeToken();
    String rewardId = Rewards.getRewardId();
    if (rewardId == null) {
      return;
    }

    ApiResponse<GetReward200Response> response =
        ApiSupport.buildRewardsApi().getRewardWithHttpInfo(rewardId, null);

    assertEquals(200, response.getStatusCode());
    Object reward = response.getData().getData();
    assertEquals(rewardId, ApiSupport.jsonApiId(reward));
    assertEquals("reward", ApiSupport.jsonApiType(reward));
    assertNotNull(reward);
  }
}
