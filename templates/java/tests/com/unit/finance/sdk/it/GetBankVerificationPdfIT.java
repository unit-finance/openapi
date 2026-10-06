package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import java.io.File;
import org.junit.jupiter.api.Test;

class GetBankVerificationPdfIT {

  @Test
  void downloadsTheBankVerificationPdfForAnAccount() throws Exception {
    ApiSupport.assumeToken();
    String accountId = SharedAccount.get().accountId;

    ApiResponse<File> response =
        ApiSupport.buildStatementsApi().getBankVerificationPdfWithHttpInfo(accountId, "false");

    assertEquals(200, response.getStatusCode());
    assertNotNull(response.getData());
  }
}
