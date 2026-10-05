package com.unit.finance.sdk.it;

import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.model.ListTaxForms200Response;

/**
 * Tax-form helpers, mirroring the Node {@code tests/helpers/taxForms.ts}.
 */
final class TaxForms {

  private TaxForms() {}

  /**
   * A tax form id, or {@code null} when the org has none.
   *
   * <p>Tax forms are issued by Unit once a year per customer; there is no
   * operation to create one, so a sandbox org that has not crossed a tax year
   * has nothing for the single-form read and the PDF download to address.
   */
  static String getTaxFormId() throws ApiException {
    ListTaxForms200Response response = ApiSupport.buildTaxFormsApi().listTaxForms();
    if (response.getData() != null) {
      for (Object taxForm : response.getData()) {
        String id = ApiSupport.jsonApiId(taxForm);
        if (id != null) {
          return id;
        }
      }
    }
    System.out.println(
        "This sandbox org has no tax forms (they are issued annually and cannot be "
            + "created from the API); skipping.");
    return null;
  }
}
