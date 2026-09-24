package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.unit.finance.sdk.api.CreditApplicationsApi;
import com.unit.finance.sdk.model.ListCreditApplications200Response;
import com.unit.finance.sdk.model.ListCreditApplications200ResponseDataInner;
import org.junit.jupiter.api.Test;

/** Mirrors {@code credit-applications/list-credit-applications.test.ts}. */
class ListCreditApplicationsIT {

  @Test
  void returnsAJsonApiListWithPageLimit20() throws Exception {
    ApiSupport.assumeToken();
    CreditApplicationsApi api = ApiSupport.buildCreditApplicationsApi();

    ListCreditApplications200Response response = Credit.listApplicationsOrSkip(api);
    if (response == null) {
      return;
    }

    assertNotNull(response.getData());
    assertTrue(response.getData().size() <= 20);
    for (ListCreditApplications200ResponseDataInner item : response.getData()) {
      assertNotNull(ApiSupport.jsonApiId(item));
      assertNotNull(ApiSupport.jsonApiType(item));
    }
  }
}
