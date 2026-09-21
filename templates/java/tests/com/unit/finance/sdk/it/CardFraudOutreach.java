package com.unit.finance.sdk.it;

import com.google.gson.JsonSyntaxException;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CardFraudOutreachApi;
import com.unit.finance.sdk.model.AuthorizationCardFraudCase;
import com.unit.finance.sdk.model.AuthorizationCardFraudCaseAttributes;
import com.unit.finance.sdk.model.CardFraudOutreachPolicy;
import com.unit.finance.sdk.model.CreatePolicy201Response;
import com.unit.finance.sdk.model.FraudCaseCardActivityType;
import com.unit.finance.sdk.model.ListCardFraudCases200Response;
import com.unit.finance.sdk.model.ListCardFraudCases200ResponseDataInner;
import com.unit.finance.sdk.model.TransactionCardFraudCase;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Card fraud outreach helpers, mirroring the Node {@code
 * tests/helpers/cardFraudOutreach.ts}.
 *
 * <p>CreatePolicy needs email/message outreach settings and a white-label theme
 * that a typical sandbox org does not provision. There is also no list-policies
 * operation, so get/update can only run after a successful create. Tests send
 * placeholder relationship ids {@code "0"} and treat a 4xx/5xx as
 * feature-unavailable — the send-link / holds pattern.
 *
 * <p>Card fraud cases are inbound (the suite cannot mint one). List may be
 * empty; get/mark then abort. Gson may also reject a 200 when {@code
 * FraudCaseCardActivityType} marks fields required that the sandbox omits.
 */
final class CardFraudOutreach {

  private CardFraudOutreach() {}

  private static final List<Integer> SKIP_STATUSES = Arrays.asList(400, 403, 404, 409, 410, 500);

  private static CardFraudOutreachPolicy cachedPolicy;
  private static boolean attemptedPolicy;

  static ApiResponse<CreatePolicy201Response> createPolicyOrSkip(CardFraudOutreachApi api)
      throws ApiException {
    try {
      return api.createPolicyWithHttpInfo(Fixtures.createPolicyRequest());
    } catch (ApiException e) {
      if (SKIP_STATUSES.contains(e.getCode())) {
        return null;
      }
      throw e;
    }
  }

  /** Lazily create one policy for get/update to reuse, or null when create aborts. */
  static CardFraudOutreachPolicy getOrCreatePolicy() throws ApiException {
    if (attemptedPolicy) {
      return cachedPolicy;
    }
    attemptedPolicy = true;
    ApiResponse<CreatePolicy201Response> created =
        createPolicyOrSkip(ApiSupport.buildCardFraudOutreachApi());
    if (created == null || created.getData() == null) {
      return null;
    }
    cachedPolicy = created.getData().getData();
    return cachedPolicy;
  }

  static ApiResponse<ListCardFraudCases200Response> listCasesOrSkip(CardFraudOutreachApi api)
      throws ApiException {
    try {
      return api.listCardFraudCasesWithHttpInfo("20", null, null, null, null, null, null, null);
    } catch (IllegalArgumentException | JsonSyntaxException e) {
      // Spec marks FraudCaseCardActivityType.updatedAt required; sandbox omits
      // it on Pending activities, so Gson rejects an otherwise-valid 200.
      return null;
    } catch (ApiException e) {
      if (SKIP_STATUSES.contains(e.getCode())
          || e.getCause() instanceof IllegalArgumentException
          || e.getCause() instanceof JsonSyntaxException
          || (e.getMessage() != null && e.getMessage().contains("required field"))) {
        return null;
      }
      throw e;
    }
  }

  static final class PendingCase {
    final String id;
    final String type;
    final List<Integer> activityIds;

    PendingCase(String id, String type, List<Integer> activityIds) {
      this.id = id;
      this.type = type;
      this.activityIds = activityIds;
    }
  }

  static List<PendingCase> pendingCases(List<ListCardFraudCases200ResponseDataInner> items) {
    List<PendingCase> out = new ArrayList<>();
    if (items == null) {
      return out;
    }
    for (ListCardFraudCases200ResponseDataInner item : items) {
      Object actual = item == null ? null : item.getActualInstance();
      String id = ApiSupport.jsonApiId(item);
      String type = ApiSupport.jsonApiType(item);
      String decision = decision(actual);
      if (id == null) {
        continue;
      }
      if (decision != null && !"Pending".equals(decision)) {
        continue;
      }
      out.add(new PendingCase(id, type, activityIds(actual)));
    }
    return out;
  }

  private static String decision(Object actual) {
    if (actual instanceof AuthorizationCardFraudCase) {
      AuthorizationCardFraudCaseAttributes attrs =
          ((AuthorizationCardFraudCase) actual).getAttributes();
      return attrs == null ? null : attrs.getDecision();
    }
    if (actual instanceof TransactionCardFraudCase) {
      AuthorizationCardFraudCaseAttributes attrs =
          ((TransactionCardFraudCase) actual).getAttributes();
      return attrs == null ? null : attrs.getDecision();
    }
    return null;
  }

  private static List<Integer> activityIds(Object actual) {
    List<FraudCaseCardActivityType> activities = null;
    if (actual instanceof AuthorizationCardFraudCase) {
      AuthorizationCardFraudCaseAttributes attrs =
          ((AuthorizationCardFraudCase) actual).getAttributes();
      activities = attrs == null ? null : attrs.getCardActivities();
    } else if (actual instanceof TransactionCardFraudCase) {
      AuthorizationCardFraudCaseAttributes attrs =
          ((TransactionCardFraudCase) actual).getAttributes();
      activities = attrs == null ? null : attrs.getCardActivities();
    }
    List<Integer> ids = new ArrayList<>();
    if (activities == null) {
      return ids;
    }
    for (FraudCaseCardActivityType activity : activities) {
      if (activity == null || activity.getId() == null) {
        continue;
      }
      try {
        ids.add(Integer.valueOf(activity.getId()));
      } catch (NumberFormatException ignored) {
        // skip non-numeric activity ids
      }
    }
    return ids;
  }
}
