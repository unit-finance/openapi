package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.PositivePayApi;
import com.unit.finance.sdk.model.CreatePositivePay201Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code positive-pay/create-positive-pay.test.ts}. */
class CreatePositivePayIT {

  @Test
  void createsACheckPaymentRule() throws Exception {
    ApiSupport.assumeToken();
    PositivePayApi api = ApiSupport.buildPositivePayApi();
    String accountId = SharedAccount.get().accountId;

    ApiResponse<CreatePositivePay201Response> response =
        api.createPositivePayWithHttpInfo(
            Fixtures.createCheckPaymentPositivePayRequest(accountId));

    assertEquals(201, response.getStatusCode());
    Object data = response.getData().getData();
    assertEquals("checkPaymentPositivePay", ApiSupport.jsonApiType(data));
    assertNotNull(ApiSupport.jsonApiId(data));
  }

  @Test
  void createsAReceivedAchDebitRule() throws Exception {
    ApiSupport.assumeToken();
    PositivePayApi api = ApiSupport.buildPositivePayApi();
    String accountId = SharedAccount.get().accountId;

    ApiResponse<CreatePositivePay201Response> response =
        api.createPositivePayWithHttpInfo(
            Fixtures.createReceivedAchDebitPositivePayRequest(accountId));

    assertEquals(201, response.getStatusCode());
    Object data = response.getData().getData();
    assertEquals("receivedAchDebitPositivePay", ApiSupport.jsonApiType(data));
    assertNotNull(ApiSupport.jsonApiId(data));
  }

  @Test
  void createsAWireDrawdownRule() throws Exception {
    ApiSupport.assumeToken();
    PositivePayApi api = ApiSupport.buildPositivePayApi();
    String accountId = SharedAccount.get().accountId;

    ApiResponse<CreatePositivePay201Response> response =
        api.createPositivePayWithHttpInfo(
            Fixtures.createWireDrawdownPositivePayRequest(accountId));

    assertEquals(201, response.getStatusCode());
    Object data = response.getData().getData();
    assertEquals("drawdownPositivePay", ApiSupport.jsonApiType(data));
    assertNotNull(ApiSupport.jsonApiId(data));
  }
}
