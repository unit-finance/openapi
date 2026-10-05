package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import java.io.File;
import org.junit.jupiter.api.Test;

class GetTaxFormPdfByIdIT {

  @Test
  void downloadsATaxFormAsPdf() throws Exception {
    ApiSupport.assumeToken();
    String taxFormId = TaxForms.getTaxFormId();
    if (taxFormId == null) {
      return;
    }

    ApiResponse<File> response =
        ApiSupport.buildTaxFormsApi().getTaxFormPdfByIdWithHttpInfo(taxFormId);

    assertEquals(200, response.getStatusCode());
    assertNotNull(response.getData());
  }
}
