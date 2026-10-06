package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import java.io.File;
import org.junit.jupiter.api.Test;

class GetStatementPdfIT {

  @Test
  void downloadsAStatementAsPdf() throws Exception {
    ApiSupport.assumeToken();
    String statementId = Statements.getStatementId();
    if (statementId == null) {
      return;
    }

    ApiResponse<File> response =
        ApiSupport.buildStatementsApi().getStatementPdfWithHttpInfo(statementId, null, null);

    assertEquals(200, response.getStatusCode());
    assertNotNull(response.getData());
  }
}
