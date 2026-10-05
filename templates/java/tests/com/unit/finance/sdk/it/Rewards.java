package com.unit.finance.sdk.it;

import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.model.CreateReward201Response;
import com.unit.finance.sdk.model.ListRewards200Response;

/**
 * Reward helpers, mirroring the Node {@code tests/helpers/rewards.ts}.
 */
final class Rewards {

  private Rewards() {}

  /**
   * Create a reward, or {@code null} when the org has no rewards program.
   *
   * <p>Rewards are funded from an org-level reward account that is provisioned
   * per bank agreement and cannot be created from the API, so an org without
   * one answers the create with 4xx/5xx — feature-unavailable, not a bad
   * request.
   */
  static Object createRewardOrSkip() throws ApiException, InterruptedException {
    String accountId = SharedAccount.get().accountId;
    ApiResponse<CreateReward201Response> response;
    try {
      response =
          ApiSupport.buildRewardsApi()
              .createRewardWithHttpInfo(Fixtures.createRewardRequest(accountId));
    } catch (ApiException e) {
      if (Capabilities.isCapabilityError(e)) {
        System.out.println(
            "Rewards are not provisioned on this sandbox org; skipping. "
                + Capabilities.errorBody(e));
        return null;
      }
      throw e;
    }
    if (response.getStatusCode() != 201) {
      throw new IllegalStateException(
          "Failed to create reward: expected status 201, got " + response.getStatusCode() + ".");
    }
    return response.getData().getData();
  }

  /**
   * A reward id for the read suite. Prefers one this run created; falls back to
   * an existing reward so the read is still covered on an org that cannot
   * create. {@code null} when neither is available.
   */
  static String getRewardId() throws ApiException, InterruptedException {
    Object created = createRewardOrSkip();
    if (created != null) {
      return ApiSupport.jsonApiId(created);
    }
    ListRewards200Response response =
        ApiSupport.buildRewardsApi()
            .listRewards("1", null, null, null, null, null, null, null, null, null, null, null,
                null);
    if (response.getData() != null) {
      for (Object reward : response.getData()) {
        String id = ApiSupport.jsonApiId(reward);
        if (id != null) {
          return id;
        }
      }
    }
    return null;
  }
}
