package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import org.junit.jupiter.api.Test;

class GetStatementHtmlIT {

  @Test
  void downloadsAStatementAsHtml() throws Exception {
    ApiSupport.assumeToken();
    String statementId = Statements.getStatementId();
    if (statementId == null) {
      return;
    }

    ApiResponse<String> response =
        ApiSupport.buildStatementsApi().getStatementHtmlWithHttpInfo(statementId, null, null);

    assertEquals(200, response.getStatusCode());
    assertNotNull(response.getData());
  }
}
