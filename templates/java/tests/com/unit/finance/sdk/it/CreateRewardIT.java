package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;

class CreateRewardIT {

  @Test
  void createsARewardOnTheSharedAccount() throws Exception {
    ApiSupport.assumeToken();

    Object reward = Rewards.createRewardOrSkip();
    if (reward == null) {
      return;
    }

    assertEquals("reward", ApiSupport.jsonApiType(reward));
    assertNotNull(ApiSupport.jsonApiId(reward));
  }
}
