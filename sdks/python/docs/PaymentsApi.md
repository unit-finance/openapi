# unit_finance_sdk.PaymentsApi

All URIs are relative to *https://api.s.unit.sh*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel_payment**](PaymentsApi.md#cancel_payment) | **POST** /payments/{paymentId}/cancel | Cancel a payment
[**clear_ach_debit_payment**](PaymentsApi.md#clear_ach_debit_payment) | **POST** /payments/{paymentId}/clear | Clear an ACH debit payment
[**create_batch_releases**](PaymentsApi.md#create_batch_releases) | **POST** /batch-releases | Create batch releases
[**create_payment**](PaymentsApi.md#create_payment) | **POST** /payments | Create a payment
[**create_recurring_payment**](PaymentsApi.md#create_recurring_payment) | **POST** /recurring-payments | Create a recurring payment
[**delete_recurring_payment**](PaymentsApi.md#delete_recurring_payment) | **DELETE** /recurring-payments/{id} | Delete a recurring payment
[**disable_recurring_payment**](PaymentsApi.md#disable_recurring_payment) | **POST** /recurring-payments/{id}/disable | Disable a recurring payment
[**enable_recurring_payment**](PaymentsApi.md#enable_recurring_payment) | **POST** /recurring-payments/{id}/enable | Enable a recurring payment
[**generate_cash_deposit_barcode**](PaymentsApi.md#generate_cash_deposit_barcode) | **POST** /cash-deposits/barcodes | Generate a cash deposit barcode
[**get_cash_deposit_barcode_image**](PaymentsApi.md#get_cash_deposit_barcode_image) | **GET** /cash-deposits/barcodes/{barcodeNumber}/image | Get a cash deposit barcode image
[**get_expected_ach_completion_date**](PaymentsApi.md#get_expected_ach_completion_date) | **POST** /payments/ach/expected-completion-date | Get expected ACH completion date
[**get_received_payment**](PaymentsApi.md#get_received_payment) | **GET** /received-payments/{id} | Get a received payment by id
[**get_recurring_payment**](PaymentsApi.md#get_recurring_payment) | **GET** /recurring-payments/{id} | Get a recurring payment by id
[**get_wire_drawdown**](PaymentsApi.md#get_wire_drawdown) | **GET** /wire-drawdowns/{id} | Get a wire drawdown by id
[**list_received_payments**](PaymentsApi.md#list_received_payments) | **GET** /received-payments | List received payments
[**list_recurring_payments**](PaymentsApi.md#list_recurring_payments) | **GET** /recurring-payments | List recurring payments
[**list_store_locations**](PaymentsApi.md#list_store_locations) | **GET** /store-locations | List cash deposit store locations
[**list_wire_drawdowns**](PaymentsApi.md#list_wire_drawdowns) | **GET** /wire-drawdowns | List wire drawdowns
[**send_drawdown_payment**](PaymentsApi.md#send_drawdown_payment) | **POST** /wire-drawdowns/{id}/send | Send a drawdown payment
[**update_payment**](PaymentsApi.md#update_payment) | **PATCH** /payments/{paymentId} | Update a payment
[**update_received_payment**](PaymentsApi.md#update_received_payment) | **PATCH** /received-payments/{id} | Update a received payment


# **cancel_payment**
> CancelPayment200Response cancel_payment(payment_id)

Cancel a payment

Cancel a previously created ACH or Wire payment. Only payments with status Pending or PendingReview can be canceled. The response is one of ACHPayment or WirePayment, discriminated by data.type.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.cancel_payment200_response import CancelPayment200Response
from unit_finance_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.s.unit.sh
# See configuration.py for a list of all supported configuration parameters.
configuration = unit_finance_sdk.Configuration(
    host = "https://api.s.unit.sh"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = unit_finance_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with unit_finance_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = unit_finance_sdk.PaymentsApi(api_client)
    payment_id = 'payment_id_example' # str | 

    try:
        # Cancel a payment
        api_response = api_instance.cancel_payment(payment_id)
        print("The response of PaymentsApi->cancel_payment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentsApi->cancel_payment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payment_id** | **str**|  | 

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
**200** | The canceled payment resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clear_ach_debit_payment**
> ClearAchDebitPayment200Response clear_ach_debit_payment(payment_id)

Clear an ACH debit payment

Clears an ACH debit payment while in clearing status. Overrides the original clearing period, making funds available immediately. Requires the Dynamic Clearing Period feature to be enabled.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.clear_ach_debit_payment200_response import ClearAchDebitPayment200Response
from unit_finance_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.s.unit.sh
# See configuration.py for a list of all supported configuration parameters.
configuration = unit_finance_sdk.Configuration(
    host = "https://api.s.unit.sh"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = unit_finance_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with unit_finance_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = unit_finance_sdk.PaymentsApi(api_client)
    payment_id = 'payment_id_example' # str | 

    try:
        # Clear an ACH debit payment
        api_response = api_instance.clear_ach_debit_payment(payment_id)
        print("The response of PaymentsApi->clear_ach_debit_payment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentsApi->clear_ach_debit_payment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payment_id** | **str**|  | 

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
**200** | The cleared payment resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_batch_releases**
> CreateBatchReleases201Response create_batch_releases(create_batch_releases_request)

Create batch releases

Release is the act of splitting a single batch payment between multiple customer accounts in your organization. When creating releases, you are required to provide compliance information for the original senders of the funds.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_batch_releases201_response import CreateBatchReleases201Response
from unit_finance_sdk.models.create_batch_releases_request import CreateBatchReleasesRequest
from unit_finance_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.s.unit.sh
# See configuration.py for a list of all supported configuration parameters.
configuration = unit_finance_sdk.Configuration(
    host = "https://api.s.unit.sh"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = unit_finance_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with unit_finance_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = unit_finance_sdk.PaymentsApi(api_client)
    create_batch_releases_request = unit_finance_sdk.CreateBatchReleasesRequest() # CreateBatchReleasesRequest | 

    try:
        # Create batch releases
        api_response = api_instance.create_batch_releases(create_batch_releases_request)
        print("The response of PaymentsApi->create_batch_releases:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentsApi->create_batch_releases: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_batch_releases_request** | [**CreateBatchReleasesRequest**](CreateBatchReleasesRequest.md)|  | 

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
**201** | Array of batch release resources. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_payment**
> CreatePayment201Response create_payment(create_payment_request)

Create a payment

Originate a payment. The request body is one of CreateACHPaymentRequest, CreateACHPaymentExistingCounterpartyRequest, CreateACHPaymentPlaidTokenRequest, CreateABookPaymentRequest, or CreateAWirePaymentRequest, discriminated by data.type (achPayment, bookPayment, wirePayment).

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_payment201_response import CreatePayment201Response
from unit_finance_sdk.models.create_payment_request import CreatePaymentRequest
from unit_finance_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.s.unit.sh
# See configuration.py for a list of all supported configuration parameters.
configuration = unit_finance_sdk.Configuration(
    host = "https://api.s.unit.sh"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = unit_finance_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with unit_finance_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = unit_finance_sdk.PaymentsApi(api_client)
    create_payment_request = unit_finance_sdk.CreatePaymentRequest() # CreatePaymentRequest | 

    try:
        # Create a payment
        api_response = api_instance.create_payment(create_payment_request)
        print("The response of PaymentsApi->create_payment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentsApi->create_payment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_payment_request** | [**CreatePaymentRequest**](CreatePaymentRequest.md)|  | 

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
**201** | The created payment resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_recurring_payment**
> CreateRecurringPayment201Response create_recurring_payment(create_recurring_payment_request)

Create a recurring payment

Originate a recurring payment. The request body is one of CreateRecurringCreditACHPaymentRequest, CreateRecurringCreditBookPaymentRequest, or CreateRecurringDebitACHPaymentRequest, discriminated by data.type (recurringCreditAchPayment, recurringBookPayment, recurringDebitAchPayment).

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_recurring_payment201_response import CreateRecurringPayment201Response
from unit_finance_sdk.models.create_recurring_payment_request import CreateRecurringPaymentRequest
from unit_finance_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.s.unit.sh
# See configuration.py for a list of all supported configuration parameters.
configuration = unit_finance_sdk.Configuration(
    host = "https://api.s.unit.sh"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = unit_finance_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with unit_finance_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = unit_finance_sdk.PaymentsApi(api_client)
    create_recurring_payment_request = unit_finance_sdk.CreateRecurringPaymentRequest() # CreateRecurringPaymentRequest | 

    try:
        # Create a recurring payment
        api_response = api_instance.create_recurring_payment(create_recurring_payment_request)
        print("The response of PaymentsApi->create_recurring_payment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentsApi->create_recurring_payment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_recurring_payment_request** | [**CreateRecurringPaymentRequest**](CreateRecurringPaymentRequest.md)|  | 

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
**201** | The created recurring payment resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_recurring_payment**
> CreateRecurringPayment201Response delete_recurring_payment(id)

Delete a recurring payment

Delete a Recurring Payment by id. When a Recurring Payment is deleted, the Recurring Payment Status Changed webhook event is fired and future payments will no longer be created according to the defined schedule.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_recurring_payment201_response import CreateRecurringPayment201Response
from unit_finance_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.s.unit.sh
# See configuration.py for a list of all supported configuration parameters.
configuration = unit_finance_sdk.Configuration(
    host = "https://api.s.unit.sh"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = unit_finance_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with unit_finance_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = unit_finance_sdk.PaymentsApi(api_client)
    id = 'id_example' # str | 

    try:
        # Delete a recurring payment
        api_response = api_instance.delete_recurring_payment(id)
        print("The response of PaymentsApi->delete_recurring_payment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentsApi->delete_recurring_payment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

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
**200** | Recurring Payment resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disable_recurring_payment**
> CreateRecurringPayment201Response disable_recurring_payment(id)

Disable a recurring payment

Disable a Recurring Payment by id. When a Recurring Payment is disabled, the Recurring Payment Status Changed webhook event is fired and future payments will no longer be created according to the defined schedule.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_recurring_payment201_response import CreateRecurringPayment201Response
from unit_finance_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.s.unit.sh
# See configuration.py for a list of all supported configuration parameters.
configuration = unit_finance_sdk.Configuration(
    host = "https://api.s.unit.sh"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = unit_finance_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with unit_finance_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = unit_finance_sdk.PaymentsApi(api_client)
    id = 'id_example' # str | 

    try:
        # Disable a recurring payment
        api_response = api_instance.disable_recurring_payment(id)
        print("The response of PaymentsApi->disable_recurring_payment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentsApi->disable_recurring_payment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

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
**200** | Recurring Payment resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enable_recurring_payment**
> CreateRecurringPayment201Response enable_recurring_payment(id)

Enable a recurring payment

Enable a recurring payment by id. When a Recurring Payment is enabled, its status is set to Active/Completed according to the start date and end date that were defined in the schedule. See Recurring Payment Statuses. When enabled, the Recurring Payment Status Changed webhook event is fired.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_recurring_payment201_response import CreateRecurringPayment201Response
from unit_finance_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.s.unit.sh
# See configuration.py for a list of all supported configuration parameters.
configuration = unit_finance_sdk.Configuration(
    host = "https://api.s.unit.sh"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = unit_finance_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with unit_finance_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = unit_finance_sdk.PaymentsApi(api_client)
    id = 'id_example' # str | 

    try:
        # Enable a recurring payment
        api_response = api_instance.enable_recurring_payment(id)
        print("The response of PaymentsApi->enable_recurring_payment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentsApi->enable_recurring_payment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

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
**200** | Recurring Payment resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generate_cash_deposit_barcode**
> GenerateCashDepositBarcode200Response generate_cash_deposit_barcode(generate_cash_deposit_barcode_request)

Generate a cash deposit barcode

Generate a barcode for a Cash Deposit store location.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.generate_cash_deposit_barcode200_response import GenerateCashDepositBarcode200Response
from unit_finance_sdk.models.generate_cash_deposit_barcode_request import GenerateCashDepositBarcodeRequest
from unit_finance_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.s.unit.sh
# See configuration.py for a list of all supported configuration parameters.
configuration = unit_finance_sdk.Configuration(
    host = "https://api.s.unit.sh"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = unit_finance_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with unit_finance_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = unit_finance_sdk.PaymentsApi(api_client)
    generate_cash_deposit_barcode_request = unit_finance_sdk.GenerateCashDepositBarcodeRequest() # GenerateCashDepositBarcodeRequest | 

    try:
        # Generate a cash deposit barcode
        api_response = api_instance.generate_cash_deposit_barcode(generate_cash_deposit_barcode_request)
        print("The response of PaymentsApi->generate_cash_deposit_barcode:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentsApi->generate_cash_deposit_barcode: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generate_cash_deposit_barcode_request** | [**GenerateCashDepositBarcodeRequest**](GenerateCashDepositBarcodeRequest.md)|  | 

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
**200** | Cash Deposit Barcode resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_cash_deposit_barcode_image**
> bytes get_cash_deposit_barcode_image(barcode_number)

Get a cash deposit barcode image

Get a cash deposit barcode image by barcode number.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.s.unit.sh
# See configuration.py for a list of all supported configuration parameters.
configuration = unit_finance_sdk.Configuration(
    host = "https://api.s.unit.sh"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = unit_finance_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with unit_finance_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = unit_finance_sdk.PaymentsApi(api_client)
    barcode_number = 'barcode_number_example' # str | The unique barcodeNumber identifier of a barcode, obtained from Generate Barcode endpoint.

    try:
        # Get a cash deposit barcode image
        api_response = api_instance.get_cash_deposit_barcode_image(barcode_number)
        print("The response of PaymentsApi->get_cash_deposit_barcode_image:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentsApi->get_cash_deposit_barcode_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **barcode_number** | **str**| The unique barcodeNumber identifier of a barcode, obtained from Generate Barcode endpoint. | 

### Return type

**bytes**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/png, application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The barcode image. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_expected_ach_completion_date**
> GetExpectedAchCompletionDate200Response get_expected_ach_completion_date(get_expected_ach_completion_date_request)

Get expected ACH completion date

Returns the expected completion or settlement date for an ACH payment before creating it. Use this endpoint to display estimated timelines to end users without initiating a payment.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.get_expected_ach_completion_date200_response import GetExpectedAchCompletionDate200Response
from unit_finance_sdk.models.get_expected_ach_completion_date_request import GetExpectedAchCompletionDateRequest
from unit_finance_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.s.unit.sh
# See configuration.py for a list of all supported configuration parameters.
configuration = unit_finance_sdk.Configuration(
    host = "https://api.s.unit.sh"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = unit_finance_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with unit_finance_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = unit_finance_sdk.PaymentsApi(api_client)
    get_expected_ach_completion_date_request = unit_finance_sdk.GetExpectedAchCompletionDateRequest() # GetExpectedAchCompletionDateRequest | 

    try:
        # Get expected ACH completion date
        api_response = api_instance.get_expected_ach_completion_date(get_expected_ach_completion_date_request)
        print("The response of PaymentsApi->get_expected_ach_completion_date:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentsApi->get_expected_ach_completion_date: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **get_expected_ach_completion_date_request** | [**GetExpectedAchCompletionDateRequest**](GetExpectedAchCompletionDateRequest.md)|  | 

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
**200** | The estimated date resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_received_payment**
> GetReceivedPayment200Response get_received_payment(id, include=include)

Get a received payment by id

Get a received payment by id.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.get_received_payment200_response import GetReceivedPayment200Response
from unit_finance_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.s.unit.sh
# See configuration.py for a list of all supported configuration parameters.
configuration = unit_finance_sdk.Configuration(
    host = "https://api.s.unit.sh"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = unit_finance_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with unit_finance_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = unit_finance_sdk.PaymentsApi(api_client)
    id = 'id_example' # str | 
    include = 'include_example' # str | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources. (optional)

    try:
        # Get a received payment by id
        api_response = api_instance.get_received_payment(id, include=include)
        print("The response of PaymentsApi->get_received_payment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentsApi->get_received_payment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **include** | **str**| Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources. | [optional] 

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
**200** | A ReceivedPayment resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_recurring_payment**
> CreateRecurringPayment201Response get_recurring_payment(id)

Get a recurring payment by id

Get a recurring payment by id.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_recurring_payment201_response import CreateRecurringPayment201Response
from unit_finance_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.s.unit.sh
# See configuration.py for a list of all supported configuration parameters.
configuration = unit_finance_sdk.Configuration(
    host = "https://api.s.unit.sh"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = unit_finance_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with unit_finance_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = unit_finance_sdk.PaymentsApi(api_client)
    id = 'id_example' # str | 

    try:
        # Get a recurring payment by id
        api_response = api_instance.get_recurring_payment(id)
        print("The response of PaymentsApi->get_recurring_payment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentsApi->get_recurring_payment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

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
**200** | Recurring Payment resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_wire_drawdown**
> GetWireDrawdown200Response get_wire_drawdown(id, include=include)

Get a wire drawdown by id

Get a wire drawdown by id.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.get_wire_drawdown200_response import GetWireDrawdown200Response
from unit_finance_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.s.unit.sh
# See configuration.py for a list of all supported configuration parameters.
configuration = unit_finance_sdk.Configuration(
    host = "https://api.s.unit.sh"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = unit_finance_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with unit_finance_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = unit_finance_sdk.PaymentsApi(api_client)
    id = 'id_example' # str | 
    include = 'include_example' # str | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources. (optional)

    try:
        # Get a wire drawdown by id
        api_response = api_instance.get_wire_drawdown(id, include=include)
        print("The response of PaymentsApi->get_wire_drawdown:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentsApi->get_wire_drawdown: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **include** | **str**| Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources. | [optional] 

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
**200** | Wire drawdown resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_received_payments**
> ListReceivedPayments200Response list_received_payments(page_limit=page_limit, page_offset=page_offset, filter_account_id=filter_account_id, filter_customer_id=filter_customer_id, filter_since=filter_since, filter_until=filter_until, filter_status=filter_status, filter_from_amount=filter_from_amount, filter_to_amount=filter_to_amount, filter_include_completed=filter_include_completed, filter_can_be_reprocessed=filter_can_be_reprocessed, filter_type=filter_type, filter_tags=filter_tags, sort=sort)

List received payments

List received payments. Filtering, paging and sorting can be applied.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.list_received_payments200_response import ListReceivedPayments200Response
from unit_finance_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.s.unit.sh
# See configuration.py for a list of all supported configuration parameters.
configuration = unit_finance_sdk.Configuration(
    host = "https://api.s.unit.sh"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = unit_finance_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with unit_finance_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = unit_finance_sdk.PaymentsApi(api_client)
    page_limit = '100' # str | Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. (optional) (default to '100')
    page_offset = '0' # str | Number of resources to skip. See Pagination. (optional) (default to '0')
    filter_account_id = 'filter_account_id_example' # str | Optional. Filters the results by the specified account id. (optional)
    filter_customer_id = 'filter_customer_id_example' # str | Optional. Filters the results by the specified customer id. (optional)
    filter_since = 'filter_since_example' # str | Optional. Filters before the specified date. e.g. 2021-06-01 (optional)
    filter_until = 'filter_until_example' # str | Optional. Filters after the specified date. e.g. 2021-07-01 (optional)
    filter_status = 'filter_status_example' # str | Optional. Filter Received Payments by status. Usage example: filter[status][0]=Pending&filter[status][1]=Advanced. Can't be stated with includeCompleted. (optional)
    filter_from_amount = 'filter_from_amount_example' # str | Optional. Filters the Received Payment that have an amount that is higher or equal to the specified amount (in cents). e.g. 5000 (optional)
    filter_to_amount = 'filter_to_amount_example' # str | Optional. Filters the Received Payment that have an amount that is lower or equal to the specified amount (in cents). e.g. 7000 (optional)
    filter_include_completed = 'filter_include_completed_example' # str | Optional. Filter to include ReceivedPayment with Status 'Completed', default False. Can't be stated with filter[status][]. (optional)
    filter_can_be_reprocessed = 'filter_can_be_reprocessed_example' # str | Optional. If set to true, returns only Received Payments that can be reprocessed. If set to false only returns Received Payments that can't be reprocessed. (optional)
    filter_type = 'filter_type_example' # str | Optional. Filter received payments by type. Valid values: Ach, Wire. Defaults to both Ach and Wire if not specified. (optional)
    filter_tags = 'filter_tags_example' # str | Optional. Filter received payments by Tags. (optional)
    sort = '-createdAt' # str | Optional. Leave empty or provide sort=createdAt for ascending order. Provide sort=-createdAt (leading minus sign) for descending order. (optional) (default to '-createdAt')

    try:
        # List received payments
        api_response = api_instance.list_received_payments(page_limit=page_limit, page_offset=page_offset, filter_account_id=filter_account_id, filter_customer_id=filter_customer_id, filter_since=filter_since, filter_until=filter_until, filter_status=filter_status, filter_from_amount=filter_from_amount, filter_to_amount=filter_to_amount, filter_include_completed=filter_include_completed, filter_can_be_reprocessed=filter_can_be_reprocessed, filter_type=filter_type, filter_tags=filter_tags, sort=sort)
        print("The response of PaymentsApi->list_received_payments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentsApi->list_received_payments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_limit** | **str**| Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | [optional] [default to &#39;100&#39;]
 **page_offset** | **str**| Number of resources to skip. See Pagination. | [optional] [default to &#39;0&#39;]
 **filter_account_id** | **str**| Optional. Filters the results by the specified account id. | [optional] 
 **filter_customer_id** | **str**| Optional. Filters the results by the specified customer id. | [optional] 
 **filter_since** | **str**| Optional. Filters before the specified date. e.g. 2021-06-01 | [optional] 
 **filter_until** | **str**| Optional. Filters after the specified date. e.g. 2021-07-01 | [optional] 
 **filter_status** | **str**| Optional. Filter Received Payments by status. Usage example: filter[status][0]&#x3D;Pending&amp;filter[status][1]&#x3D;Advanced. Can&#39;t be stated with includeCompleted. | [optional] 
 **filter_from_amount** | **str**| Optional. Filters the Received Payment that have an amount that is higher or equal to the specified amount (in cents). e.g. 5000 | [optional] 
 **filter_to_amount** | **str**| Optional. Filters the Received Payment that have an amount that is lower or equal to the specified amount (in cents). e.g. 7000 | [optional] 
 **filter_include_completed** | **str**| Optional. Filter to include ReceivedPayment with Status &#39;Completed&#39;, default False. Can&#39;t be stated with filter[status][]. | [optional] 
 **filter_can_be_reprocessed** | **str**| Optional. If set to true, returns only Received Payments that can be reprocessed. If set to false only returns Received Payments that can&#39;t be reprocessed. | [optional] 
 **filter_type** | **str**| Optional. Filter received payments by type. Valid values: Ach, Wire. Defaults to both Ach and Wire if not specified. | [optional] 
 **filter_tags** | **str**| Optional. Filter received payments by Tags. | [optional] 
 **sort** | **str**| Optional. Leave empty or provide sort&#x3D;createdAt for ascending order. Provide sort&#x3D;-createdAt (leading minus sign) for descending order. | [optional] [default to &#39;-createdAt&#39;]

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
**200** | Array of received payment resources. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_recurring_payments**
> ListRecurringPayments200Response list_recurring_payments(page_limit=page_limit, page_offset=page_offset, filter_account_id=filter_account_id, filter_customer_id=filter_customer_id, filter_status=filter_status, filter_type=filter_type, filter_from_start_time=filter_from_start_time, filter_to_start_time=filter_to_start_time, filter_from_end_time=filter_from_end_time, filter_to_end_time=filter_to_end_time, sort=sort)

List recurring payments

List recurring payments resources. Filtering, paging and sorting can be applied.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.list_recurring_payments200_response import ListRecurringPayments200Response
from unit_finance_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.s.unit.sh
# See configuration.py for a list of all supported configuration parameters.
configuration = unit_finance_sdk.Configuration(
    host = "https://api.s.unit.sh"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = unit_finance_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with unit_finance_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = unit_finance_sdk.PaymentsApi(api_client)
    page_limit = '100' # str | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. (optional) (default to '100')
    page_offset = '0' # str | Optional. Number of resources to skip. See Pagination. (optional) (default to '0')
    filter_account_id = 'filter_account_id_example' # str | Optional. Filters the results by the specified account id. (optional)
    filter_customer_id = 'filter_customer_id_example' # str | Optional. Filters the results by the specified customer id. (optional)
    filter_status = 'filter_status_example' # str | Optional. Filter recurring payments by status (Active, Completed or Disabled). Usage example: filter[status][0]=Active (optional)
    filter_type = 'filter_type_example' # str | Optional. Filter recurring payments by Recurring Payment type, such as RecurringCreditAchPayment, RecurringCreditBookPayment. Usage example: filter[type][0]=RecurringCreditAchPayment&filter[type][1]=RecurringCreditBookPayment (optional)
    filter_from_start_time = 'filter_from_start_time_example' # str | Optional. Filters the Recurring Payments that their start time occurred after the specified date. e.g. 2022-06-13 (optional)
    filter_to_start_time = 'filter_to_start_time_example' # str | Optional. Filters the Recurring Payments that their start time occurred before the specified date. e.g. 2022-05-13 (optional)
    filter_from_end_time = 'filter_from_end_time_example' # str | Optional. Filters the Recurring Payments that their end time occurred after the specified date. e.g. 2022-06-13 (optional)
    filter_to_end_time = 'filter_to_end_time_example' # str | Optional. Filters the Recurring Payments that their end time occurred before the specified date. e.g. 2022-05-13 (optional)
    sort = '-createdAt' # str | Optional. Leave empty or provide sort=createdAt for ascending order. Provide sort=-createdAt (leading minus sign) for descending order. (optional) (default to '-createdAt')

    try:
        # List recurring payments
        api_response = api_instance.list_recurring_payments(page_limit=page_limit, page_offset=page_offset, filter_account_id=filter_account_id, filter_customer_id=filter_customer_id, filter_status=filter_status, filter_type=filter_type, filter_from_start_time=filter_from_start_time, filter_to_start_time=filter_to_start_time, filter_from_end_time=filter_from_end_time, filter_to_end_time=filter_to_end_time, sort=sort)
        print("The response of PaymentsApi->list_recurring_payments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentsApi->list_recurring_payments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_limit** | **str**| Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | [optional] [default to &#39;100&#39;]
 **page_offset** | **str**| Optional. Number of resources to skip. See Pagination. | [optional] [default to &#39;0&#39;]
 **filter_account_id** | **str**| Optional. Filters the results by the specified account id. | [optional] 
 **filter_customer_id** | **str**| Optional. Filters the results by the specified customer id. | [optional] 
 **filter_status** | **str**| Optional. Filter recurring payments by status (Active, Completed or Disabled). Usage example: filter[status][0]&#x3D;Active | [optional] 
 **filter_type** | **str**| Optional. Filter recurring payments by Recurring Payment type, such as RecurringCreditAchPayment, RecurringCreditBookPayment. Usage example: filter[type][0]&#x3D;RecurringCreditAchPayment&amp;filter[type][1]&#x3D;RecurringCreditBookPayment | [optional] 
 **filter_from_start_time** | **str**| Optional. Filters the Recurring Payments that their start time occurred after the specified date. e.g. 2022-06-13 | [optional] 
 **filter_to_start_time** | **str**| Optional. Filters the Recurring Payments that their start time occurred before the specified date. e.g. 2022-05-13 | [optional] 
 **filter_from_end_time** | **str**| Optional. Filters the Recurring Payments that their end time occurred after the specified date. e.g. 2022-06-13 | [optional] 
 **filter_to_end_time** | **str**| Optional. Filters the Recurring Payments that their end time occurred before the specified date. e.g. 2022-05-13 | [optional] 
 **sort** | **str**| Optional. Leave empty or provide sort&#x3D;createdAt for ascending order. Provide sort&#x3D;-createdAt (leading minus sign) for descending order. | [optional] [default to &#39;-createdAt&#39;]

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
**200** | Array of recurring payment resources. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_store_locations**
> ListStoreLocations200Response list_store_locations(filter_coordinates=filter_coordinates, filter_postal_code=filter_postal_code, filter_service_type=filter_service_type, page_limit=page_limit, page_offset=page_offset)

List cash deposit store locations

List Cash Deposit store locations by coordinates or by postal code.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.list_store_locations200_response import ListStoreLocations200Response
from unit_finance_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.s.unit.sh
# See configuration.py for a list of all supported configuration parameters.
configuration = unit_finance_sdk.Configuration(
    host = "https://api.s.unit.sh"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = unit_finance_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with unit_finance_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = unit_finance_sdk.PaymentsApi(api_client)
    filter_coordinates = 'filter_coordinates_example' # str | Filters the results by the specified coordinates. (optional)
    filter_postal_code = 'filter_postal_code_example' # str | Filters the results by the specified postal code. (optional)
    filter_service_type = 'Swipe' # str | Optional. Filters the results by the specified service type. Possible values are: Swipe, Barcode. (optional) (default to 'Swipe')
    page_limit = '100' # str | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. (optional) (default to '100')
    page_offset = '0' # str | Optional. Number of resources to skip. See Pagination. (optional) (default to '0')

    try:
        # List cash deposit store locations
        api_response = api_instance.list_store_locations(filter_coordinates=filter_coordinates, filter_postal_code=filter_postal_code, filter_service_type=filter_service_type, page_limit=page_limit, page_offset=page_offset)
        print("The response of PaymentsApi->list_store_locations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentsApi->list_store_locations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter_coordinates** | **str**| Filters the results by the specified coordinates. | [optional] 
 **filter_postal_code** | **str**| Filters the results by the specified postal code. | [optional] 
 **filter_service_type** | **str**| Optional. Filters the results by the specified service type. Possible values are: Swipe, Barcode. | [optional] [default to &#39;Swipe&#39;]
 **page_limit** | **str**| Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | [optional] [default to &#39;100&#39;]
 **page_offset** | **str**| Optional. Number of resources to skip. See Pagination. | [optional] [default to &#39;0&#39;]

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
**200** | Array of Cash Deposit Store Location resources. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_wire_drawdowns**
> ListWireDrawdowns200Response list_wire_drawdowns(page_limit=page_limit, page_offset=page_offset, filter_account_id=filter_account_id, filter_customer_id=filter_customer_id, include=include)

List wire drawdowns

List wire drawdowns resources. Filtering and paging can be applied.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.list_wire_drawdowns200_response import ListWireDrawdowns200Response
from unit_finance_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.s.unit.sh
# See configuration.py for a list of all supported configuration parameters.
configuration = unit_finance_sdk.Configuration(
    host = "https://api.s.unit.sh"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = unit_finance_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with unit_finance_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = unit_finance_sdk.PaymentsApi(api_client)
    page_limit = '100' # str | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. (optional) (default to '100')
    page_offset = '0' # str | Optional. Number of resources to skip. See Pagination. (optional) (default to '0')
    filter_account_id = 'filter_account_id_example' # str | Optional. Filters the results by the specified account id. (optional)
    filter_customer_id = 'filter_customer_id_example' # str | Optional. Filters the results by the specified customer id. (optional)
    include = 'include_example' # str | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources. (optional)

    try:
        # List wire drawdowns
        api_response = api_instance.list_wire_drawdowns(page_limit=page_limit, page_offset=page_offset, filter_account_id=filter_account_id, filter_customer_id=filter_customer_id, include=include)
        print("The response of PaymentsApi->list_wire_drawdowns:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentsApi->list_wire_drawdowns: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_limit** | **str**| Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | [optional] [default to &#39;100&#39;]
 **page_offset** | **str**| Optional. Number of resources to skip. See Pagination. | [optional] [default to &#39;0&#39;]
 **filter_account_id** | **str**| Optional. Filters the results by the specified account id. | [optional] 
 **filter_customer_id** | **str**| Optional. Filters the results by the specified customer id. | [optional] 
 **include** | **str**| Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources. | [optional] 

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
**200** | Array of wire drawdown resources. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **send_drawdown_payment**
> SendDrawdownPayment200Response send_drawdown_payment(id, send_drawdown_payment_request)

Send a drawdown payment

Send a wire payment in response to a drawdown request. The API will create a Wire Payment as a response to the drawdown request. You can observe the drawdownPayment relationship to retrieve the Payment Identifier.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.send_drawdown_payment200_response import SendDrawdownPayment200Response
from unit_finance_sdk.models.send_drawdown_payment_request import SendDrawdownPaymentRequest
from unit_finance_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.s.unit.sh
# See configuration.py for a list of all supported configuration parameters.
configuration = unit_finance_sdk.Configuration(
    host = "https://api.s.unit.sh"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = unit_finance_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with unit_finance_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = unit_finance_sdk.PaymentsApi(api_client)
    id = 'id_example' # str | 
    send_drawdown_payment_request = unit_finance_sdk.SendDrawdownPaymentRequest() # SendDrawdownPaymentRequest | 

    try:
        # Send a drawdown payment
        api_response = api_instance.send_drawdown_payment(id, send_drawdown_payment_request)
        print("The response of PaymentsApi->send_drawdown_payment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentsApi->send_drawdown_payment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **send_drawdown_payment_request** | [**SendDrawdownPaymentRequest**](SendDrawdownPaymentRequest.md)|  | 

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
**200** | The requested resource after the operation was completed. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_payment**
> UpdatePayment200Response update_payment(payment_id, update_payment_request)

Update a payment

Update a payment. The request body is one of UpdateACHPaymentRequest or UpdateBookPaymentRequest, discriminated by data.type (achPayment, bookPayment).

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.update_payment200_response import UpdatePayment200Response
from unit_finance_sdk.models.update_payment_request import UpdatePaymentRequest
from unit_finance_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.s.unit.sh
# See configuration.py for a list of all supported configuration parameters.
configuration = unit_finance_sdk.Configuration(
    host = "https://api.s.unit.sh"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = unit_finance_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with unit_finance_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = unit_finance_sdk.PaymentsApi(api_client)
    payment_id = 'payment_id_example' # str | 
    update_payment_request = unit_finance_sdk.UpdatePaymentRequest() # UpdatePaymentRequest | 

    try:
        # Update a payment
        api_response = api_instance.update_payment(payment_id, update_payment_request)
        print("The response of PaymentsApi->update_payment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentsApi->update_payment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payment_id** | **str**|  | 
 **update_payment_request** | [**UpdatePaymentRequest**](UpdatePaymentRequest.md)|  | 

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
**200** | The updated payment resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_received_payment**
> UpdateReceivedPayment200Response update_received_payment(id, update_received_payment_request)

Update a received payment

Update a Received Payment.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.update_received_payment200_response import UpdateReceivedPayment200Response
from unit_finance_sdk.models.update_received_payment_request import UpdateReceivedPaymentRequest
from unit_finance_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.s.unit.sh
# See configuration.py for a list of all supported configuration parameters.
configuration = unit_finance_sdk.Configuration(
    host = "https://api.s.unit.sh"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = unit_finance_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with unit_finance_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = unit_finance_sdk.PaymentsApi(api_client)
    id = 'id_example' # str | 
    update_received_payment_request = unit_finance_sdk.UpdateReceivedPaymentRequest() # UpdateReceivedPaymentRequest | 

    try:
        # Update a received payment
        api_response = api_instance.update_received_payment(id, update_received_payment_request)
        print("The response of PaymentsApi->update_received_payment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentsApi->update_received_payment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **update_received_payment_request** | [**UpdateReceivedPaymentRequest**](UpdateReceivedPaymentRequest.md)|  | 

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
**200** | The updated Received Payment resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

