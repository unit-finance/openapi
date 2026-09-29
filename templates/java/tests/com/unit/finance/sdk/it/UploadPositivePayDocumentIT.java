package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.PositivePayApi;
import java.io.File;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import org.junit.jupiter.api.Test;

/** Mirrors {@code positive-pay/upload-positive-pay-document.test.ts}. */
class UploadPositivePayDocumentIT {

  /** The smallest byte sequence the sandbox accepts as an {@code application/pdf} body. */
  private static final String MINIMAL_PDF =
      "%PDF-1.4\n1 0 obj<</Type/Catalog>>endobj\ntrailer<</Root 1 0 R>>\n%%EOF\n";

  @Test
  void activatesADrawdownRuleByUploadingItsDocument() throws Exception {
    ApiSupport.assumeToken();
    PositivePayApi api = ApiSupport.buildPositivePayApi();
    // Only the drawdown variant is created `AwaitingDocuments`; the other two
    // are already `Active` and answer this upload with 400.
    String positivePayId = PositivePay.createWireDrawdownRuleId();

    Path pdf = Files.createTempFile("positive-pay-", ".pdf");
    Files.write(pdf, MINIMAL_PDF.getBytes(StandardCharsets.UTF_8));
    File document = pdf.toFile();
    document.deleteOnExit();

    // The spec declares no response content for this operation, so the
    // generated method returns `Void`. The sandbox does return the activated
    // rule; only the status is assertable here. Tracked in SLICES.md.
    ApiResponse<Void> response =
        api.uploadPositivePayDocumentWithHttpInfo(positivePayId, document);

    assertEquals(200, response.getStatusCode());
  }
}
