package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.ApplicationDocumentsApi;
import java.io.File;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

/** Mirrors {@code application-documents/download-back.test.ts}. */
class DownloadApplicationDocumentBackSideIT {

  // TODO(application-documents-slice): re-enable once ApplicationDocumentAttributes
  // stops marking fields the sandbox returns as null as required (see
  // ListApplicationDocumentsIT). The download itself returns a binary File, but
  // obtaining a document id (create) and placing a back-side file on it (upload)
  // both go through ApplicationDocument bodies that Gson refuses to deserialize.
  @Disabled("application-documents-slice: ApplicationDocumentAttributes fields wrongly required; won't deserialize")
  @Test
  void downloadsAnApplicationDocumentBackSideFile() throws Exception {
    ApiSupport.assumeToken();
    ApplicationDocumentsApi api = ApiSupport.buildApplicationDocumentsApi();
    SharedApp shared = SharedApp.get();
    String documentId = ApplicationDocuments.createCustomDocument(shared.id);
    // A back-side file must be uploaded before it can be downloaded.
    api.uploadApplicationDocumentBackSideWithHttpInfo(
        shared.id, documentId, ApplicationDocuments.jpegImageFile());

    ApiResponse<File> response =
        api.downloadApplicationDocumentBackSideWithHttpInfo(shared.id, documentId);

    assertEquals(200, response.getStatusCode());
    assertNotNull(response.getData());
  }
}
