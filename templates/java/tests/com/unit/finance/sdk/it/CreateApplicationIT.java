package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.ApplicationsApi;
import com.unit.finance.sdk.model.CreateApplication201Response;
import com.unit.finance.sdk.model.CreateApplicationRequest;
import org.junit.jupiter.api.Test;

/**
 * Mirrors {@code applications/create.test.ts}.
 *
 * <p>The spec types the {@code POST /applications} 201 response {@code data} as
 * a JSON:API {@code oneOf} of {@code IndividualApplication} /
 * {@code BusinessApplication}, deserialized via the {@code type} discriminator.
 * The typed response therefore round-trips any variant; we unwrap the resulting
 * {@code List200ResponseDataInner} union via {@link ApiSupport}. The Individual
 * and SoleProprietor cases additionally assert the request envelope serializes
 * with the correct JSON:API discriminator (the unit-level analogue of the Node
 * assertions, so they run without a sandbox token).
 */
class CreateApplicationIT {

  @Test
  void createsABusinessApplication() throws Exception {
    ApiSupport.assumeToken();
    ApplicationsApi api = ApiSupport.buildApi();

    ApiResponse<CreateApplication201Response> response =
        api.createApplicationWithHttpInfo(
            new CreateApplicationRequest(Fixtures.businessApplicationRequest()));

    assertEquals(201, response.getStatusCode());
    assertEquals("businessApplication", ApiSupport.resourceType(response.getData().getData()));
    assertNotNull(ApiSupport.resourceId(response.getData().getData()));
    assertNotNull(response.getData().getData().getActualInstance());
  }

  @Test
  void buildsAnIndividualApplicationRequestWithTheCorrectDiscriminator() {
    String json =
        new CreateApplicationRequest(Fixtures.individualApplicationRequest()).toJson();
    assertTrue(
        json.contains("\"type\":\"individualApplication\""),
        "expected individualApplication discriminator in: " + json);
  }

  @Test
  void buildsASoleProprietorApplicationRequestWithTheCorrectDiscriminator() {
    String json =
        new CreateApplicationRequest(Fixtures.soleProprietorApplicationRequest()).toJson();
    assertTrue(
        json.contains("\"type\":\"individualApplication\""),
        "expected individualApplication discriminator in: " + json);
    assertTrue(
        json.contains("\"soleProprietorship\":true"),
        "expected soleProprietorship attribute in: " + json);
  }
}
