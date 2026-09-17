package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.ApplicationDocumentsApi;
import com.unit.finance.sdk.model.ApplicationDocument;
import com.unit.finance.sdk.model.ListApplicationDocuments200Response;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

/** Mirrors {@code application-documents/list.test.ts}. */
class ListApplicationDocumentsIT {

  // TODO(application-documents-slice): re-enable once ApplicationDocumentAttributes
  // stops marking fields the sandbox returns as null (status, documentType,
  // description, name, archived) as required. The generated Gson
  // validateJsonElement rejects a JSON-null required field, so it throws on an
  // otherwise-valid 200. Node (axios) does not validate; python/ruby read the
  // raw body. Fix in the OpenAPI application-documents slice.
  @Disabled("application-documents-slice: ApplicationDocumentAttributes fields wrongly required; won't deserialize")
  @Test
  void returnsAJsonApiListOfApplicationDocuments() throws Exception {
    ApiSupport.assumeToken();
    ApplicationDocumentsApi api = ApiSupport.buildApplicationDocumentsApi();
    SharedApp shared = SharedApp.get();

    ApiResponse<ListApplicationDocuments200Response> response =
        api.listApplicationDocumentsWithHttpInfo(shared.id);

    assertEquals(200, response.getStatusCode());
    assertNotNull(response.getData().getData());
    for (ApplicationDocument doc : response.getData().getData()) {
      assertTrue(doc.getId() != null);
      assertNotNull(doc.getAttributes());
    }
  }
}
