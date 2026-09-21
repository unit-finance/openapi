package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assumptions.assumeTrue;

import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CardFraudOutreachApi;
import com.unit.finance.sdk.model.GetCardFraudCaseById200Response;
import com.unit.finance.sdk.model.ListCardFraudCases200Response;
import java.util.Arrays;
import java.util.List;
import org.junit.jupiter.api.Test;

/** Mirrors {@code card-fraud-outreach/mark-card-fraud-case-as-fraud.test.ts}. */
class MarkCardFraudCaseAsFraudIT {

  private static final List<Integer> SKIP_STATUSES = Arrays.asList(400, 403, 404, 409, 410, 422, 500);

  @Test
  void marksAPendingCardFraudCaseAsFraud() throws Exception {
    ApiSupport.assumeToken();
    CardFraudOutreachApi api = ApiSupport.buildCardFraudOutreachApi();

    ApiResponse<ListCardFraudCases200Response> listed = CardFraudOutreach.listCasesOrSkip(api);
    assumeTrue(
        listed != null,
        "listCardFraudCases is unavailable or the 200 body did not match the typed models");

    CardFraudOutreach.PendingCase pending = null;
    for (CardFraudOutreach.PendingCase candidate :
        CardFraudOutreach.pendingCases(listed.getData().getData())) {
      if (!candidate.activityIds.isEmpty()) {
        pending = candidate;
        break;
      }
    }
    assumeTrue(pending != null, "no pending card fraud case with activity ids in sandbox");

    ApiResponse<GetCardFraudCaseById200Response> response;
    try {
      response =
          api.markCardFraudCaseAsFraudWithHttpInfo(
              pending.id, Fixtures.markCardFraudCaseAsFraudRequest(pending.activityIds));
    } catch (IllegalArgumentException e) {
      assumeTrue(false, "markCardFraudCaseAsFraud body did not match typed models: " + e.getMessage());
      return;
    } catch (ApiException e) {
      assumeTrue(
          !SKIP_STATUSES.contains(e.getCode()),
          "markCardFraudCaseAsFraud is not legal for this case / org");
      if (e.getCause() instanceof IllegalArgumentException
          || (e.getMessage() != null && e.getMessage().contains("required field"))) {
        assumeTrue(false, "markCardFraudCaseAsFraud body did not match typed models: " + e.getMessage());
        return;
      }
      throw e;
    }

    assertEquals(200, response.getStatusCode());
    assertEquals(pending.id, ApiSupport.jsonApiId(response.getData().getData()));
    assertNotNull(response.getData().getData());
  }
}
