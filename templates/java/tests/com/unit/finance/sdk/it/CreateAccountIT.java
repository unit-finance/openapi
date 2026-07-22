package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.AccountsApi;
import com.unit.finance.sdk.api.ApplicationsApi;
import com.unit.finance.sdk.model.BusinessApplication;
import com.unit.finance.sdk.model.CreateAccount201Response;
import com.unit.finance.sdk.model.CreateApplication201Response;
import com.unit.finance.sdk.model.CreateApplicationRequest;
import com.unit.finance.sdk.model.DepositAccount;
import com.unit.finance.sdk.model.List200ResponseDataInner;
import org.junit.jupiter.api.Test;

/** Mirrors {@code accounts/create.test.ts}. */
class CreateAccountIT {

  @Test
  void createsADepositAccountForAnApprovedBusinessCustomer() throws Exception {
    ApiSupport.assumeToken();
    ApplicationsApi appsApi = ApiSupport.buildApplicationsApi();
    AccountsApi accountsApi = ApiSupport.buildAccountsApi();

    ApiResponse<CreateApplication201Response> created =
        appsApi.createApplicationWithHttpInfo(
            new CreateApplicationRequest(Fixtures.businessApplicationRequest()));
    assertEquals(201, created.getStatusCode());

    List200ResponseDataInner appData = appsApi.getById(ApiSupport.resourceId(created.getData().getData())).getData();
    BusinessApplication app = (BusinessApplication) appData.getActualInstance();
    String customerId = ApiSupport.customerIdFromBusinessApplication(app);
    assertNotNull(customerId);

    ApiResponse<CreateAccount201Response> response =
        accountsApi.createAccountWithHttpInfo(Fixtures.createAccountRequest(customerId));

    assertEquals(201, response.getStatusCode());
    DepositAccount account = ApiSupport.depositAccount(response.getData().getData());
    assertEquals("depositAccount", account.getType().getValue());
    assertNotNull(account.getId());
    assertNotNull(account.getAttributes());
    assertNotNull(account.getAttributes().getDepositProduct());
    assertNotNull(account.getAttributes().getStatus());
  }
}
