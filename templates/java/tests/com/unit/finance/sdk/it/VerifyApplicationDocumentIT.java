package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.ApplicationDocumentsApi;
import com.unit.finance.sdk.model.CreateApplicationDocument200Response;
import com.unit.finance.sdk.model.VerifyDocumentData;
import com.unit.finance.sdk.model.VerifyDocumentDataAttributes;
import com.unit.finance.sdk.model.VerifyDocumentRequest;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

/** Mirrors {@code application-documents/verify.test.ts}. */
class VerifyApplicationDocumentIT {

  // TODO(application-documents-slice): re-enable once ApplicationDocumentAttributes
  // stops marking fields the sandbox returns as null as required (see
  // ListApplicationDocumentsIT), and once a SelfieVerification document + real
  // IDV jobId can be provisioned. Verify returns an ApplicationDocument body
  // that Gson refuses to deserialize, and the operation is only legal for a
  // SelfieVerification document, which these suites cannot create.
  @Disabled("application-documents-slice: ApplicationDocumentAttributes fields wrongly required; won't deserialize")
  @Test
  void verifiesASelfieVerificationApplicationDocument() throws Exception {
    ApiSupport.assumeToken();
    ApplicationDocumentsApi api = ApiSupport.buildApplicationDocumentsApi();
    SharedApp shared = SharedApp.get();
    String documentId = ApplicationDocuments.createCustomDocument(shared.id);

    VerifyDocumentRequest request =
        new VerifyDocumentRequest()
            .data(
                new VerifyDocumentData()
                    .type(VerifyDocumentData.TypeEnum.SELFIE_VERIFICATION)
                    .attributes(new VerifyDocumentDataAttributes().jobId("X16krjAN1")));

    ApiResponse<CreateApplicationDocument200Response> response =
        api.verifyApplicationDocumentWithHttpInfo(shared.id, documentId, request);

    assertEquals(200, response.getStatusCode());
    assertEquals(documentId, response.getData().getData().getId());
    assertNotNull(response.getData().getData().getAttributes());
  }
}
