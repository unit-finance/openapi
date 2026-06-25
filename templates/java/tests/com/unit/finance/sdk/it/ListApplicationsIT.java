package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.unit.finance.sdk.api.ApplicationsApi;
import com.unit.finance.sdk.model.List200Response;
import com.unit.finance.sdk.model.List200ResponseDataInner;
import java.util.Arrays;
import org.junit.jupiter.api.Test;

/** Mirrors {@code applications/list.test.ts}. */
class ListApplicationsIT {

  @Test
  void returnsAJsonApiListWithPageLimit20() throws Exception {
    ApiSupport.assumeToken();
    ApplicationsApi api = ApiSupport.buildApi();

    List200Response response = api.callList("20", null, null, null, null, null, null);

    assertNotNull(response.getData());
    assertTrue(response.getData().size() <= 20);
    for (List200ResponseDataInner item : response.getData()) {
      String type = ApiSupport.resourceType(item);
      assertTrue(
          Arrays.asList("businessApplication", "individualApplication").contains(type),
          "unexpected resource type: " + type);
      assertNotNull(ApiSupport.resourceId(item));
    }
  }
}
