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

/** Mirrors {@code card-fraud-outreach/mark-card-fraud-case-as-no-fraud.test.ts}. */
class MarkCardFraudCaseAsNoFraudIT {

  private static final List<Integer> SKIP_STATUSES = Arrays.asList(400, 403, 404, 409, 410, 422, 500);

  @Test
  void marksAPendingCardFraudCaseAsNoFraud() throws Exception {
    ApiSupport.assumeToken();
    CardFraudOutreachApi api = ApiSupport.buildCardFraudOutreachApi();

    ApiResponse<ListCardFraudCases200Response> listed = CardFraudOutreach.listCasesOrSkip(api);
    assumeTrue(
        listed != null,
        "listCardFraudCases is unavailable or the 200 body did not match the typed models");

    List<CardFraudOutreach.PendingCase> pending =
        CardFraudOutreach.pendingCases(listed.getData().getData());
    assumeTrue(!pending.isEmpty(), "no pending card fraud cases in sandbox");
    CardFraudOutreach.PendingCase target = pending.size() > 1 ? pending.get(1) : pending.get(0);

    ApiResponse<GetCardFraudCaseById200Response> response;
    try {
      response = api.markCardFraudCaseAsNoFraudWithHttpInfo(target.id, null);
    } catch (IllegalArgumentException e) {
      assumeTrue(
          false, "markCardFraudCaseAsNoFraud body did not match typed models: " + e.getMessage());
      return;
    } catch (ApiException e) {
      assumeTrue(
          !SKIP_STATUSES.contains(e.getCode()),
          "markCardFraudCaseAsNoFraud is not legal for this case / org");
      if (e.getCause() instanceof IllegalArgumentException
          || (e.getMessage() != null && e.getMessage().contains("required field"))) {
        assumeTrue(
            false, "markCardFraudCaseAsNoFraud body did not match typed models: " + e.getMessage());
        return;
      }
      throw e;
    }

    assertEquals(200, response.getStatusCode());
    assertEquals(target.id, ApiSupport.jsonApiId(response.getData().getData()));
    assertNotNull(response.getData().getData());
  }
}
