package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.ApplicationDocumentsApi;
import com.unit.finance.sdk.model.CreateApplicationDocument200Response;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

/** Mirrors {@code application-documents/upload-back.test.ts}. */
class UploadApplicationDocumentBackSideIT {

  // TODO(application-documents-slice): re-enable once ApplicationDocumentAttributes
  // stops marking fields the sandbox returns as null as required (see
  // ListApplicationDocumentsIT). The create + upload responses are
  // ApplicationDocument bodies that Gson refuses to deserialize.
  @Disabled("application-documents-slice: ApplicationDocumentAttributes fields wrongly required; won't deserialize")
  @Test
  void uploadsAnApplicationDocumentBackSideFile() throws Exception {
    ApiSupport.assumeToken();
    ApplicationDocumentsApi api = ApiSupport.buildApplicationDocumentsApi();
    SharedApp shared = SharedApp.get();
    String documentId = ApplicationDocuments.createCustomDocument(shared.id);

    ApiResponse<CreateApplicationDocument200Response> response =
        api.uploadApplicationDocumentBackSideWithHttpInfo(
            shared.id, documentId, ApplicationDocuments.jpegImageFile());

    assertEquals(200, response.getStatusCode());
    assertEquals(documentId, response.getData().getData().getId());
    assertNotNull(response.getData().getData().getAttributes());
  }
}
