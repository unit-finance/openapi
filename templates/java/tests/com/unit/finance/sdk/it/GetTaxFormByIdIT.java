package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.model.GetTaxFormById200Response;
import org.junit.jupiter.api.Test;

class GetTaxFormByIdIT {

  @Test
  void fetchesATaxFormById() throws Exception {
    ApiSupport.assumeToken();
    String taxFormId = TaxForms.getTaxFormId();
    if (taxFormId == null) {
      return;
    }

    ApiResponse<GetTaxFormById200Response> response =
        ApiSupport.buildTaxFormsApi().getTaxFormByIdWithHttpInfo(taxFormId);

    assertEquals(200, response.getStatusCode());
    Object taxForm = response.getData().getData();
    assertEquals(taxFormId, ApiSupport.jsonApiId(taxForm));
    assertEquals("taxForm", ApiSupport.jsonApiType(taxForm));
    assertNotNull(taxForm);
  }
}
