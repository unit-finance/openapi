package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.model.ListTaxForms200Response;
import org.junit.jupiter.api.Test;

class ListTaxFormsIT {

  @Test
  void returnsAJsonApiListOfTaxForms() throws Exception {
    ApiSupport.assumeToken();

    ListTaxForms200Response response = ApiSupport.buildTaxFormsApi().listTaxForms();

    assertNotNull(response.getData());
    for (Object taxForm : response.getData()) {
      assertNotNull(ApiSupport.jsonApiId(taxForm));
      assertEquals("taxForm", ApiSupport.jsonApiType(taxForm));
    }
  }
}
