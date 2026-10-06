package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import org.junit.jupiter.api.Test;

class ListStatementsIT {

  /**
   * No page-size assertion: {@code /statements} accepts {@code page[limit]} but
   * ignores it — the sandbox returns every statement of the period regardless.
   * That is an API/spec mismatch owned by {@code unit-openapi}, so the suite
   * asserts envelope shape only.
   */
  @Test
  void returnsAJsonApiList() throws Exception {
    ApiSupport.assumeToken();

    for (JsonElement element : Statements.listStatementsRaw()) {
      JsonObject statement = element.getAsJsonObject();
      assertNotNull(statement.get("id").getAsString());
      assertEquals(Statements.STATEMENT_TYPE, statement.get("type").getAsString());
      assertNotNull(statement.get("attributes"));
    }
  }
}
