# PaymentsApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**cancelPayment**](PaymentsApi.md#cancelPayment) | **POST** /payments/{paymentId}/cancel | Cancel a payment |
| [**clearAchDebitPayment**](PaymentsApi.md#clearAchDebitPayment) | **POST** /payments/{paymentId}/clear | Clear an ACH debit payment |
| [**createBatchReleases**](PaymentsApi.md#createBatchReleases) | **POST** /batch-releases | Create batch releases |
| [**createPayment**](PaymentsApi.md#createPayment) | **POST** /payments | Create a payment |
| [**createRecurringPayment**](PaymentsApi.md#createRecurringPayment) | **POST** /recurring-payments | Create a recurring payment |
| [**deleteRecurringPayment**](PaymentsApi.md#deleteRecurringPayment) | **DELETE** /recurring-payments/{id} | Delete a recurring payment |
| [**disableRecurringPayment**](PaymentsApi.md#disableRecurringPayment) | **POST** /recurring-payments/{id}/disable | Disable a recurring payment |
| [**enableRecurringPayment**](PaymentsApi.md#enableRecurringPayment) | **POST** /recurring-payments/{id}/enable | Enable a recurring payment |
| [**generateCashDepositBarcode**](PaymentsApi.md#generateCashDepositBarcode) | **POST** /cash-deposits/barcodes | Generate a cash deposit barcode |
| [**getCashDepositBarcodeImage**](PaymentsApi.md#getCashDepositBarcodeImage) | **GET** /cash-deposits/barcodes/{barcodeNumber}/image | Get a cash deposit barcode image |
| [**getExpectedAchCompletionDate**](PaymentsApi.md#getExpectedAchCompletionDate) | **POST** /payments/ach/expected-completion-date | Get expected ACH completion date |
| [**getReceivedPayment**](PaymentsApi.md#getReceivedPayment) | **GET** /received-payments/{id} | Get a received payment by id |
| [**getRecurringPayment**](PaymentsApi.md#getRecurringPayment) | **GET** /recurring-payments/{id} | Get a recurring payment by id |
| [**getWireDrawdown**](PaymentsApi.md#getWireDrawdown) | **GET** /wire-drawdowns/{id} | Get a wire drawdown by id |
| [**listReceivedPayments**](PaymentsApi.md#listReceivedPayments) | **GET** /received-payments | List received payments |
| [**listRecurringPayments**](PaymentsApi.md#listRecurringPayments) | **GET** /recurring-payments | List recurring payments |
| [**listStoreLocations**](PaymentsApi.md#listStoreLocations) | **GET** /store-locations | List cash deposit store locations |
| [**listWireDrawdowns**](PaymentsApi.md#listWireDrawdowns) | **GET** /wire-drawdowns | List wire drawdowns |
| [**sendDrawdownPayment**](PaymentsApi.md#sendDrawdownPayment) | **POST** /wire-drawdowns/{id}/send | Send a drawdown payment |
| [**updatePayment**](PaymentsApi.md#updatePayment) | **PATCH** /payments/{paymentId} | Update a payment |
| [**updateReceivedPayment**](PaymentsApi.md#updateReceivedPayment) | **PATCH** /received-payments/{id} | Update a received payment |


<a id="cancelPayment"></a>
# **cancelPayment**
> CancelPayment200Response cancelPayment(paymentId)

Cancel a payment

Cancel a previously created ACH or Wire payment. Only payments with status Pending or PendingReview can be canceled. The response is one of ACHPayment or WirePayment, discriminated by data.type.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.PaymentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    PaymentsApi apiInstance = new PaymentsApi(defaultClient);
    String paymentId = "paymentId_example"; // String | 
    try {
      CancelPayment200Response result = apiInstance.cancelPayment(paymentId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PaymentsApi#cancelPayment");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **paymentId** | **String**|  | |

### Return type

[**CancelPayment200Response**](CancelPayment200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The canceled payment resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="clearAchDebitPayment"></a>
# **clearAchDebitPayment**
> ClearAchDebitPayment200Response clearAchDebitPayment(paymentId)

Clear an ACH debit payment

Clears an ACH debit payment while in clearing status. Overrides the original clearing period, making funds available immediately. Requires the Dynamic Clearing Period feature to be enabled.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.PaymentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    PaymentsApi apiInstance = new PaymentsApi(defaultClient);
    String paymentId = "paymentId_example"; // String | 
    try {
      ClearAchDebitPayment200Response result = apiInstance.clearAchDebitPayment(paymentId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PaymentsApi#clearAchDebitPayment");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **paymentId** | **String**|  | |

### Return type

[**ClearAchDebitPayment200Response**](ClearAchDebitPayment200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The cleared payment resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="createBatchReleases"></a>
# **createBatchReleases**
> CreateBatchReleases201Response createBatchReleases(createBatchReleasesRequest)

Create batch releases

Release is the act of splitting a single batch payment between multiple customer accounts in your organization. When creating releases, you are required to provide compliance information for the original senders of the funds.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.PaymentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    PaymentsApi apiInstance = new PaymentsApi(defaultClient);
    CreateBatchReleasesRequest createBatchReleasesRequest = new CreateBatchReleasesRequest(); // CreateBatchReleasesRequest | 
    try {
      CreateBatchReleases201Response result = apiInstance.createBatchReleases(createBatchReleasesRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PaymentsApi#createBatchReleases");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createBatchReleasesRequest** | [**CreateBatchReleasesRequest**](CreateBatchReleasesRequest.md)|  | |

### Return type

[**CreateBatchReleases201Response**](CreateBatchReleases201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Array of batch release resources. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="createPayment"></a>
# **createPayment**
> CreatePayment201Response createPayment(createPaymentRequest)

Create a payment

Originate a payment. The request body is one of CreateACHPaymentRequest, CreateACHPaymentExistingCounterpartyRequest, CreateACHPaymentPlaidTokenRequest, CreateABookPaymentRequest, or CreateAWirePaymentRequest, discriminated by data.type (achPayment, bookPayment, wirePayment).

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.PaymentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    PaymentsApi apiInstance = new PaymentsApi(defaultClient);
    CreatePaymentRequest createPaymentRequest = new CreatePaymentRequest(); // CreatePaymentRequest | 
    try {
      CreatePayment201Response result = apiInstance.createPayment(createPaymentRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PaymentsApi#createPayment");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createPaymentRequest** | [**CreatePaymentRequest**](CreatePaymentRequest.md)|  | |

### Return type

[**CreatePayment201Response**](CreatePayment201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The created payment resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="createRecurringPayment"></a>
# **createRecurringPayment**
> CreateRecurringPayment201Response createRecurringPayment(createRecurringPaymentRequest)

Create a recurring payment

Originate a recurring payment. The request body is one of CreateRecurringCreditACHPaymentRequest, CreateRecurringCreditBookPaymentRequest, or CreateRecurringDebitACHPaymentRequest, discriminated by data.type (recurringCreditAchPayment, recurringBookPayment, recurringDebitAchPayment).

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.PaymentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    PaymentsApi apiInstance = new PaymentsApi(defaultClient);
    CreateRecurringPaymentRequest createRecurringPaymentRequest = new CreateRecurringPaymentRequest(); // CreateRecurringPaymentRequest | 
    try {
      CreateRecurringPayment201Response result = apiInstance.createRecurringPayment(createRecurringPaymentRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PaymentsApi#createRecurringPayment");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createRecurringPaymentRequest** | [**CreateRecurringPaymentRequest**](CreateRecurringPaymentRequest.md)|  | |

### Return type

[**CreateRecurringPayment201Response**](CreateRecurringPayment201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The created recurring payment resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="deleteRecurringPayment"></a>
# **deleteRecurringPayment**
> CreateRecurringPayment201Response deleteRecurringPayment(id)

Delete a recurring payment

Delete a Recurring Payment by id. When a Recurring Payment is deleted, the Recurring Payment Status Changed webhook event is fired and future payments will no longer be created according to the defined schedule.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.PaymentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    PaymentsApi apiInstance = new PaymentsApi(defaultClient);
    String id = "id_example"; // String | 
    try {
      CreateRecurringPayment201Response result = apiInstance.deleteRecurringPayment(id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PaymentsApi#deleteRecurringPayment");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**|  | |

### Return type

[**CreateRecurringPayment201Response**](CreateRecurringPayment201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Recurring Payment resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="disableRecurringPayment"></a>
# **disableRecurringPayment**
> CreateRecurringPayment201Response disableRecurringPayment(id)

Disable a recurring payment

Disable a Recurring Payment by id. When a Recurring Payment is disabled, the Recurring Payment Status Changed webhook event is fired and future payments will no longer be created according to the defined schedule.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.PaymentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    PaymentsApi apiInstance = new PaymentsApi(defaultClient);
    String id = "id_example"; // String | 
    try {
      CreateRecurringPayment201Response result = apiInstance.disableRecurringPayment(id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PaymentsApi#disableRecurringPayment");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**|  | |

### Return type

[**CreateRecurringPayment201Response**](CreateRecurringPayment201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Recurring Payment resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="enableRecurringPayment"></a>
# **enableRecurringPayment**
> CreateRecurringPayment201Response enableRecurringPayment(id)

Enable a recurring payment

Enable a recurring payment by id. When a Recurring Payment is enabled, its status is set to Active/Completed according to the start date and end date that were defined in the schedule. See Recurring Payment Statuses. When enabled, the Recurring Payment Status Changed webhook event is fired.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.PaymentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    PaymentsApi apiInstance = new PaymentsApi(defaultClient);
    String id = "id_example"; // String | 
    try {
      CreateRecurringPayment201Response result = apiInstance.enableRecurringPayment(id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PaymentsApi#enableRecurringPayment");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**|  | |

### Return type

[**CreateRecurringPayment201Response**](CreateRecurringPayment201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Recurring Payment resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="generateCashDepositBarcode"></a>
# **generateCashDepositBarcode**
> GenerateCashDepositBarcode200Response generateCashDepositBarcode(generateCashDepositBarcodeRequest)

Generate a cash deposit barcode

Generate a barcode for a Cash Deposit store location.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.PaymentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    PaymentsApi apiInstance = new PaymentsApi(defaultClient);
    GenerateCashDepositBarcodeRequest generateCashDepositBarcodeRequest = new GenerateCashDepositBarcodeRequest(); // GenerateCashDepositBarcodeRequest | 
    try {
      GenerateCashDepositBarcode200Response result = apiInstance.generateCashDepositBarcode(generateCashDepositBarcodeRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PaymentsApi#generateCashDepositBarcode");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **generateCashDepositBarcodeRequest** | [**GenerateCashDepositBarcodeRequest**](GenerateCashDepositBarcodeRequest.md)|  | |

### Return type

[**GenerateCashDepositBarcode200Response**](GenerateCashDepositBarcode200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Cash Deposit Barcode resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="getCashDepositBarcodeImage"></a>
# **getCashDepositBarcodeImage**
> File getCashDepositBarcodeImage(barcodeNumber)

Get a cash deposit barcode image

Get a cash deposit barcode image by barcode number.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.PaymentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    PaymentsApi apiInstance = new PaymentsApi(defaultClient);
    String barcodeNumber = "barcodeNumber_example"; // String | The unique barcodeNumber identifier of a barcode, obtained from Generate Barcode endpoint.
    try {
      File result = apiInstance.getCashDepositBarcodeImage(barcodeNumber);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PaymentsApi#getCashDepositBarcodeImage");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **barcodeNumber** | **String**| The unique barcodeNumber identifier of a barcode, obtained from Generate Barcode endpoint. | |

### Return type

[**File**](File.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/png, application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The barcode image. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="getExpectedAchCompletionDate"></a>
# **getExpectedAchCompletionDate**
> GetExpectedAchCompletionDate200Response getExpectedAchCompletionDate(getExpectedAchCompletionDateRequest)

Get expected ACH completion date

Returns the expected completion or settlement date for an ACH payment before creating it. Use this endpoint to display estimated timelines to end users without initiating a payment.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.PaymentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    PaymentsApi apiInstance = new PaymentsApi(defaultClient);
    GetExpectedAchCompletionDateRequest getExpectedAchCompletionDateRequest = new GetExpectedAchCompletionDateRequest(); // GetExpectedAchCompletionDateRequest | 
    try {
      GetExpectedAchCompletionDate200Response result = apiInstance.getExpectedAchCompletionDate(getExpectedAchCompletionDateRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PaymentsApi#getExpectedAchCompletionDate");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **getExpectedAchCompletionDateRequest** | [**GetExpectedAchCompletionDateRequest**](GetExpectedAchCompletionDateRequest.md)|  | |

### Return type

[**GetExpectedAchCompletionDate200Response**](GetExpectedAchCompletionDate200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The estimated date resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="getReceivedPayment"></a>
# **getReceivedPayment**
> GetReceivedPayment200Response getReceivedPayment(id, include)

Get a received payment by id

Get a received payment by id.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.PaymentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    PaymentsApi apiInstance = new PaymentsApi(defaultClient);
    String id = "id_example"; // String | 
    String include = "include_example"; // String | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources.
    try {
      GetReceivedPayment200Response result = apiInstance.getReceivedPayment(id, include);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PaymentsApi#getReceivedPayment");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**|  | |
| **include** | **String**| Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources. | [optional] |

### Return type

[**GetReceivedPayment200Response**](GetReceivedPayment200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A ReceivedPayment resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="getRecurringPayment"></a>
# **getRecurringPayment**
> CreateRecurringPayment201Response getRecurringPayment(id)

Get a recurring payment by id

Get a recurring payment by id.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.PaymentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    PaymentsApi apiInstance = new PaymentsApi(defaultClient);
    String id = "id_example"; // String | 
    try {
      CreateRecurringPayment201Response result = apiInstance.getRecurringPayment(id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PaymentsApi#getRecurringPayment");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**|  | |

### Return type

[**CreateRecurringPayment201Response**](CreateRecurringPayment201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Recurring Payment resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="getWireDrawdown"></a>
# **getWireDrawdown**
> GetWireDrawdown200Response getWireDrawdown(id, include)

Get a wire drawdown by id

Get a wire drawdown by id.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.PaymentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    PaymentsApi apiInstance = new PaymentsApi(defaultClient);
    String id = "id_example"; // String | 
    String include = "include_example"; // String | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources.
    try {
      GetWireDrawdown200Response result = apiInstance.getWireDrawdown(id, include);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PaymentsApi#getWireDrawdown");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**|  | |
| **include** | **String**| Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources. | [optional] |

### Return type

[**GetWireDrawdown200Response**](GetWireDrawdown200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Wire drawdown resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="listReceivedPayments"></a>
# **listReceivedPayments**
> ListReceivedPayments200Response listReceivedPayments(pageLimit, pageOffset, filterAccountId, filterCustomerId, filterSince, filterUntil, filterStatus, filterFromAmount, filterToAmount, filterIncludeCompleted, filterCanBeReprocessed, filterType, filterTags, sort)

List received payments

List received payments. Filtering, paging and sorting can be applied.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.PaymentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    PaymentsApi apiInstance = new PaymentsApi(defaultClient);
    String pageLimit = "100"; // String | Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination.
    String pageOffset = "0"; // String | Number of resources to skip. See Pagination.
    String filterAccountId = "filterAccountId_example"; // String | Optional. Filters the results by the specified account id.
    String filterCustomerId = "filterCustomerId_example"; // String | Optional. Filters the results by the specified customer id.
    String filterSince = "filterSince_example"; // String | Optional. Filters before the specified date. e.g. 2021-06-01
    String filterUntil = "filterUntil_example"; // String | Optional. Filters after the specified date. e.g. 2021-07-01
    String filterStatus = "filterStatus_example"; // String | Optional. Filter Received Payments by status. Usage example: filter[status][0]=Pending&filter[status][1]=Advanced. Can't be stated with includeCompleted.
    String filterFromAmount = "filterFromAmount_example"; // String | Optional. Filters the Received Payment that have an amount that is higher or equal to the specified amount (in cents). e.g. 5000
    String filterToAmount = "filterToAmount_example"; // String | Optional. Filters the Received Payment that have an amount that is lower or equal to the specified amount (in cents). e.g. 7000
    String filterIncludeCompleted = "filterIncludeCompleted_example"; // String | Optional. Filter to include ReceivedPayment with Status 'Completed', default False. Can't be stated with filter[status][].
    String filterCanBeReprocessed = "filterCanBeReprocessed_example"; // String | Optional. If set to true, returns only Received Payments that can be reprocessed. If set to false only returns Received Payments that can't be reprocessed.
    String filterType = "filterType_example"; // String | Optional. Filter received payments by type. Valid values: Ach, Wire. Defaults to both Ach and Wire if not specified.
    String filterTags = "filterTags_example"; // String | Optional. Filter received payments by Tags.
    String sort = "-createdAt"; // String | Optional. Leave empty or provide sort=createdAt for ascending order. Provide sort=-createdAt (leading minus sign) for descending order.
    try {
      ListReceivedPayments200Response result = apiInstance.listReceivedPayments(pageLimit, pageOffset, filterAccountId, filterCustomerId, filterSince, filterUntil, filterStatus, filterFromAmount, filterToAmount, filterIncludeCompleted, filterCanBeReprocessed, filterType, filterTags, sort);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PaymentsApi#listReceivedPayments");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **pageLimit** | **String**| Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | [optional] [default to 100] |
| **pageOffset** | **String**| Number of resources to skip. See Pagination. | [optional] [default to 0] |
| **filterAccountId** | **String**| Optional. Filters the results by the specified account id. | [optional] |
| **filterCustomerId** | **String**| Optional. Filters the results by the specified customer id. | [optional] |
| **filterSince** | **String**| Optional. Filters before the specified date. e.g. 2021-06-01 | [optional] |
| **filterUntil** | **String**| Optional. Filters after the specified date. e.g. 2021-07-01 | [optional] |
| **filterStatus** | **String**| Optional. Filter Received Payments by status. Usage example: filter[status][0]&#x3D;Pending&amp;filter[status][1]&#x3D;Advanced. Can&#39;t be stated with includeCompleted. | [optional] |
| **filterFromAmount** | **String**| Optional. Filters the Received Payment that have an amount that is higher or equal to the specified amount (in cents). e.g. 5000 | [optional] |
| **filterToAmount** | **String**| Optional. Filters the Received Payment that have an amount that is lower or equal to the specified amount (in cents). e.g. 7000 | [optional] |
| **filterIncludeCompleted** | **String**| Optional. Filter to include ReceivedPayment with Status &#39;Completed&#39;, default False. Can&#39;t be stated with filter[status][]. | [optional] |
| **filterCanBeReprocessed** | **String**| Optional. If set to true, returns only Received Payments that can be reprocessed. If set to false only returns Received Payments that can&#39;t be reprocessed. | [optional] |
| **filterType** | **String**| Optional. Filter received payments by type. Valid values: Ach, Wire. Defaults to both Ach and Wire if not specified. | [optional] |
| **filterTags** | **String**| Optional. Filter received payments by Tags. | [optional] |
| **sort** | **String**| Optional. Leave empty or provide sort&#x3D;createdAt for ascending order. Provide sort&#x3D;-createdAt (leading minus sign) for descending order. | [optional] [default to -createdAt] |

### Return type

[**ListReceivedPayments200Response**](ListReceivedPayments200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Array of received payment resources. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="listRecurringPayments"></a>
# **listRecurringPayments**
> ListRecurringPayments200Response listRecurringPayments(pageLimit, pageOffset, filterAccountId, filterCustomerId, filterStatus, filterType, filterFromStartTime, filterToStartTime, filterFromEndTime, filterToEndTime, sort)

List recurring payments

List recurring payments resources. Filtering, paging and sorting can be applied.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.PaymentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    PaymentsApi apiInstance = new PaymentsApi(defaultClient);
    String pageLimit = "100"; // String | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination.
    String pageOffset = "0"; // String | Optional. Number of resources to skip. See Pagination.
    String filterAccountId = "filterAccountId_example"; // String | Optional. Filters the results by the specified account id.
    String filterCustomerId = "filterCustomerId_example"; // String | Optional. Filters the results by the specified customer id.
    String filterStatus = "filterStatus_example"; // String | Optional. Filter recurring payments by status (Active, Completed or Disabled). Usage example: filter[status][0]=Active
    String filterType = "filterType_example"; // String | Optional. Filter recurring payments by Recurring Payment type, such as RecurringCreditAchPayment, RecurringCreditBookPayment. Usage example: filter[type][0]=RecurringCreditAchPayment&filter[type][1]=RecurringCreditBookPayment
    String filterFromStartTime = "filterFromStartTime_example"; // String | Optional. Filters the Recurring Payments that their start time occurred after the specified date. e.g. 2022-06-13
    String filterToStartTime = "filterToStartTime_example"; // String | Optional. Filters the Recurring Payments that their start time occurred before the specified date. e.g. 2022-05-13
    String filterFromEndTime = "filterFromEndTime_example"; // String | Optional. Filters the Recurring Payments that their end time occurred after the specified date. e.g. 2022-06-13
    String filterToEndTime = "filterToEndTime_example"; // String | Optional. Filters the Recurring Payments that their end time occurred before the specified date. e.g. 2022-05-13
    String sort = "-createdAt"; // String | Optional. Leave empty or provide sort=createdAt for ascending order. Provide sort=-createdAt (leading minus sign) for descending order.
    try {
      ListRecurringPayments200Response result = apiInstance.listRecurringPayments(pageLimit, pageOffset, filterAccountId, filterCustomerId, filterStatus, filterType, filterFromStartTime, filterToStartTime, filterFromEndTime, filterToEndTime, sort);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PaymentsApi#listRecurringPayments");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **pageLimit** | **String**| Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | [optional] [default to 100] |
| **pageOffset** | **String**| Optional. Number of resources to skip. See Pagination. | [optional] [default to 0] |
| **filterAccountId** | **String**| Optional. Filters the results by the specified account id. | [optional] |
| **filterCustomerId** | **String**| Optional. Filters the results by the specified customer id. | [optional] |
| **filterStatus** | **String**| Optional. Filter recurring payments by status (Active, Completed or Disabled). Usage example: filter[status][0]&#x3D;Active | [optional] |
| **filterType** | **String**| Optional. Filter recurring payments by Recurring Payment type, such as RecurringCreditAchPayment, RecurringCreditBookPayment. Usage example: filter[type][0]&#x3D;RecurringCreditAchPayment&amp;filter[type][1]&#x3D;RecurringCreditBookPayment | [optional] |
| **filterFromStartTime** | **String**| Optional. Filters the Recurring Payments that their start time occurred after the specified date. e.g. 2022-06-13 | [optional] |
| **filterToStartTime** | **String**| Optional. Filters the Recurring Payments that their start time occurred before the specified date. e.g. 2022-05-13 | [optional] |
| **filterFromEndTime** | **String**| Optional. Filters the Recurring Payments that their end time occurred after the specified date. e.g. 2022-06-13 | [optional] |
| **filterToEndTime** | **String**| Optional. Filters the Recurring Payments that their end time occurred before the specified date. e.g. 2022-05-13 | [optional] |
| **sort** | **String**| Optional. Leave empty or provide sort&#x3D;createdAt for ascending order. Provide sort&#x3D;-createdAt (leading minus sign) for descending order. | [optional] [default to -createdAt] |

### Return type

[**ListRecurringPayments200Response**](ListRecurringPayments200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Array of recurring payment resources. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="listStoreLocations"></a>
# **listStoreLocations**
> ListStoreLocations200Response listStoreLocations(filterCoordinates, filterPostalCode, filterServiceType, pageLimit, pageOffset)

List cash deposit store locations

List Cash Deposit store locations by coordinates or by postal code.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.PaymentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    PaymentsApi apiInstance = new PaymentsApi(defaultClient);
    String filterCoordinates = "filterCoordinates_example"; // String | Filters the results by the specified coordinates.
    String filterPostalCode = "filterPostalCode_example"; // String | Filters the results by the specified postal code.
    String filterServiceType = "Swipe"; // String | Optional. Filters the results by the specified service type. Possible values are: Swipe, Barcode.
    String pageLimit = "100"; // String | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination.
    String pageOffset = "0"; // String | Optional. Number of resources to skip. See Pagination.
    try {
      ListStoreLocations200Response result = apiInstance.listStoreLocations(filterCoordinates, filterPostalCode, filterServiceType, pageLimit, pageOffset);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PaymentsApi#listStoreLocations");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **filterCoordinates** | **String**| Filters the results by the specified coordinates. | [optional] |
| **filterPostalCode** | **String**| Filters the results by the specified postal code. | [optional] |
| **filterServiceType** | **String**| Optional. Filters the results by the specified service type. Possible values are: Swipe, Barcode. | [optional] [default to Swipe] |
| **pageLimit** | **String**| Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | [optional] [default to 100] |
| **pageOffset** | **String**| Optional. Number of resources to skip. See Pagination. | [optional] [default to 0] |

### Return type

[**ListStoreLocations200Response**](ListStoreLocations200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Array of Cash Deposit Store Location resources. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="listWireDrawdowns"></a>
# **listWireDrawdowns**
> ListWireDrawdowns200Response listWireDrawdowns(pageLimit, pageOffset, filterAccountId, filterCustomerId, include)

List wire drawdowns

List wire drawdowns resources. Filtering and paging can be applied.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.PaymentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    PaymentsApi apiInstance = new PaymentsApi(defaultClient);
    String pageLimit = "100"; // String | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination.
    String pageOffset = "0"; // String | Optional. Number of resources to skip. See Pagination.
    String filterAccountId = "filterAccountId_example"; // String | Optional. Filters the results by the specified account id.
    String filterCustomerId = "filterCustomerId_example"; // String | Optional. Filters the results by the specified customer id.
    String include = "include_example"; // String | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources.
    try {
      ListWireDrawdowns200Response result = apiInstance.listWireDrawdowns(pageLimit, pageOffset, filterAccountId, filterCustomerId, include);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PaymentsApi#listWireDrawdowns");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **pageLimit** | **String**| Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | [optional] [default to 100] |
| **pageOffset** | **String**| Optional. Number of resources to skip. See Pagination. | [optional] [default to 0] |
| **filterAccountId** | **String**| Optional. Filters the results by the specified account id. | [optional] |
| **filterCustomerId** | **String**| Optional. Filters the results by the specified customer id. | [optional] |
| **include** | **String**| Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources. | [optional] |

### Return type

[**ListWireDrawdowns200Response**](ListWireDrawdowns200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Array of wire drawdown resources. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="sendDrawdownPayment"></a>
# **sendDrawdownPayment**
> SendDrawdownPayment200Response sendDrawdownPayment(id, sendDrawdownPaymentRequest)

Send a drawdown payment

Send a wire payment in response to a drawdown request. The API will create a Wire Payment as a response to the drawdown request. You can observe the drawdownPayment relationship to retrieve the Payment Identifier.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.PaymentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    PaymentsApi apiInstance = new PaymentsApi(defaultClient);
    String id = "id_example"; // String | 
    SendDrawdownPaymentRequest sendDrawdownPaymentRequest = new SendDrawdownPaymentRequest(); // SendDrawdownPaymentRequest | 
    try {
      SendDrawdownPayment200Response result = apiInstance.sendDrawdownPayment(id, sendDrawdownPaymentRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PaymentsApi#sendDrawdownPayment");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**|  | |
| **sendDrawdownPaymentRequest** | [**SendDrawdownPaymentRequest**](SendDrawdownPaymentRequest.md)|  | |

### Return type

[**SendDrawdownPayment200Response**](SendDrawdownPayment200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The requested resource after the operation was completed. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="updatePayment"></a>
# **updatePayment**
> UpdatePayment200Response updatePayment(paymentId, updatePaymentRequest)

Update a payment

Update a payment. The request body is one of UpdateACHPaymentRequest or UpdateBookPaymentRequest, discriminated by data.type (achPayment, bookPayment).

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.PaymentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    PaymentsApi apiInstance = new PaymentsApi(defaultClient);
    String paymentId = "paymentId_example"; // String | 
    UpdatePaymentRequest updatePaymentRequest = new UpdatePaymentRequest(); // UpdatePaymentRequest | 
    try {
      UpdatePayment200Response result = apiInstance.updatePayment(paymentId, updatePaymentRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PaymentsApi#updatePayment");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **paymentId** | **String**|  | |
| **updatePaymentRequest** | [**UpdatePaymentRequest**](UpdatePaymentRequest.md)|  | |

### Return type

[**UpdatePayment200Response**](UpdatePayment200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The updated payment resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="updateReceivedPayment"></a>
# **updateReceivedPayment**
> UpdateReceivedPayment200Response updateReceivedPayment(id, updateReceivedPaymentRequest)

Update a received payment

Update a Received Payment.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.PaymentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    PaymentsApi apiInstance = new PaymentsApi(defaultClient);
    String id = "id_example"; // String | 
    UpdateReceivedPaymentRequest updateReceivedPaymentRequest = new UpdateReceivedPaymentRequest(); // UpdateReceivedPaymentRequest | 
    try {
      UpdateReceivedPayment200Response result = apiInstance.updateReceivedPayment(id, updateReceivedPaymentRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PaymentsApi#updateReceivedPayment");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**|  | |
| **updateReceivedPaymentRequest** | [**UpdateReceivedPaymentRequest**](UpdateReceivedPaymentRequest.md)|  | |

### Return type

[**UpdateReceivedPayment200Response**](UpdateReceivedPayment200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The updated Received Payment resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

